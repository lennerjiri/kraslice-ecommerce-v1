import { Context } from 'koa';
import {
    IUser,
    INewUser,
    ICreatedUser,
    IUpdateUser,
} from '../interfaces/usersinterfaces.js';
import Users from '../model/usersmodel.js';

const getAllUsers = async (ctx: Context) => {
    try {
        // conversion
        const page: string | string[] | undefined | number = ctx.query.page;
        const limit: string | string[] | undefined | number = ctx.query.limit;

        let parsedPage = Number(page);
        let parsedLimit = Number(limit);

        // default
        parsedPage = page !== undefined ? parsedPage : 1;
        parsedLimit = limit !== undefined ? parsedLimit : 24;

        // validation
        if (
            parsedPage < 1 ||
            parsedLimit < 1 ||
            parsedLimit > 50 ||
            isNaN(parsedPage) ||
            isNaN(parsedLimit)
        ) {
            ctx.throw(400, {
                message: 'Invalid query parameters',
                page: ctx.query.page,
                limit: ctx.query.limit,
            });
        }

        const allUsers = await Users.find()
            .skip((parsedPage - 1) * parsedLimit)
            .limit(parsedLimit)
            .select('-updatedAt -createdAt -password');

        ctx.body = {
            data: allUsers,
        };
    } catch (err: unknown) {
        if (err instanceof Error) {
            ctx.app.emit('error', err, ctx);
        }
    }
};

const getOneUser = async (ctx: Context) => {
    try {
        const oneUser = await Users.findById(ctx.params.id).select(
            '-updatedAt -createdAt -password'
        );

        if (!oneUser) {
            ctx.throw(404, {
                message: 'User not found',
                id: ctx.params.id,
            });
        }

        ctx.status = 200;
        ctx.body = {
            data: [oneUser],
        };
    } catch (err: unknown) {
        if (err instanceof Error) {
            ctx.app.emit('error', err, ctx);
        }
    }
};

const createUser = async (ctx: Context) => {
    try {
        const newUserData = ctx.request.body as INewUser;

        if (
            Object.keys(newUserData).length === 0 ||
            Object.keys(newUserData.data).length === 0
        ) {
            ctx.throw(400, {
                message: 'Empty request body',
            });
        }

        const newUser = (await Users.create(
            newUserData.data
        )) as unknown as ICreatedUser;

        newUser.updatedAt = undefined;
        newUser.createdAt = undefined;
        newUser.__v = undefined;
        newUser.password = undefined;

        ctx.status = 201;
        ctx.body = {
            data: [newUser],
        };
    } catch (err: unknown) {
        if (err instanceof Error) {
            ctx.app.emit('error', err, ctx);
        }
    }
};

const updateUser = async (ctx: Context) => {
    try {
        const updatedUserData = ctx.request.body as IUpdateUser;

        if (
            Object.keys(updatedUserData).length === 0 ||
            Object.keys(updatedUserData.data).length === 0
        ) {
            ctx.throw(400, {
                message: 'Empty request body',
            });
        }

        const updatedUser = await Users.findByIdAndUpdate(
            ctx.params.id as string,
            updatedUserData.data,
            { new: true }
        ).select('-updatedAt -createdAt -password');

        if (!updatedUser) {
            ctx.throw(404, {
                message: 'User not found',
                id: ctx.params.id,
            });
        }

        ctx.status = 200;
        ctx.body = {
            data: [updatedUser],
        };
    } catch (err: unknown) {
        if (err instanceof Error) {
            ctx.app.emit('error', err, ctx);
        }
    }
};

const deleteUser = async (ctx: Context) => {
    try {
        const deletedUser = await Users.findByIdAndDelete(
            ctx.params.id as string
        );

        if (!deletedUser) {
            ctx.throw(404, {
                message: 'User not found',
                id: ctx.params.id,
            });
        }

        ctx.status = 204;
    } catch (err: unknown) {
        if (err instanceof Error) {
            ctx.app.emit('error', err, ctx);
        }
    }
};

const optionsUsers = async (ctx: Context) => {
    ctx.set('Allow', 'GET, POST, PATCH, DELETE, OPTIONS');
    ctx.body = {
        data: {
            methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
            query: {
                page: {
                    methods: ['GET'],
                    default: 1,
                    min: 1,
                },
                limit: {
                    methods: ['GET'],
                    default: 24,
                    min: 1,
                    max: 50,
                },
            },
        },
    };
};

export {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    optionsUsers,
};
