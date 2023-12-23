import { Context, Next } from 'koa';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Users from '../model/usersmodel.js';
import {
    IFoundUser,
    ISignCandidate,
    IFoundUserPasswordOptional,
} from '../interfaces/authinterfaces.js';

const routeProtector = async (ctx: Context, next: Next) => {
    const token = ctx.cookies.get('token');

    if (token) {
        try {
            // validate token
            await jwt.verify(token, process.env.JWT_SECRET as string);

            await next();
        } catch (err) {
            ctx.status = 401;
            ctx.body = {
                error: 'Invalid token',
            };
        }
    } else {
        ctx.status = 401;
        ctx.body = {
            error: 'No token provided',
        };
    }
};

const signIn = async (ctx: Context) => {
    try {
        const signInCandidate = ctx.request.body as ISignCandidate;

        if (
            Object.keys(signInCandidate).length === 0 ||
            Object.keys(signInCandidate.data).length === 0
        ) {
            ctx.throw(400, {
                message: 'Empty request body',
            });
        }

        const { email, password } = signInCandidate.data;

        const user = (await Users.findOne({ email: email }).select(
            '-updatedAt -createdAt'
        )) as unknown as IFoundUser;

        if (!user) {
            ctx.throw(401, {
                message: 'Invalid email',
            });
        } else if (!password) {
            ctx.throw(401, {
                message: 'Invalid password',
            });
        }

        // Match password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            ctx.throw(401, {
                message: 'Invalid password',
            });
        }

        // Create token
        const payload = {
            iat: Date.now(),
            sub: user._id as string,
        };

        const expiration = 60 * 60 * 24; // expires in 24 hours

        const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
            expiresIn: expiration,
        });

        ctx.cookies.set('token', token, {
            httpOnly: true, // prevent client side JS from reading the cookie
            //secure: true, // only send cookie over https
            maxAge: 1000 * expiration, // expires in 24 hours
        });

        // Remove password from user object
        const userWithoutPassword = user as IFoundUserPasswordOptional;
        userWithoutPassword.password = undefined;

        ctx.body = { data: [user] };
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err);

            ctx.app.emit('error', err, ctx);
        }
    }
};

const optionsAuth = async (ctx: Context) => {
    ctx.set('Allow', 'POST, OPTIONS');
    ctx.body = {
        data: {
            methods: ['POST', 'OPTIONS'],
            requirements: {
                body: {
                    data: {
                        email: {
                            type: 'string',
                            required: true,
                        },
                        password: {
                            type: 'string',
                            required: true,
                        },
                    },
                },
            },
        },
    };
};

export { signIn, optionsAuth, routeProtector };
