import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const usersSchema = new mongoose.Schema(
    {
        username: {
            // User Name
            type: String,
            required: [true, 'User has to have a name'],
            trim: true,
            maxlength: [
                40,
                'The username must be less than or equal to 40 characters long',
            ],
            minlength: [
                1,
                'The username must be more than or equal to 4 characters long',
            ],
        },
        email: {
            // User Email
            type: String,
            required: [true, 'User has to have an email'],
            unique: true,
            trim: true,
            lowercase: true,
            validate: [
                (value: string): boolean =>
                    // eslint-disable-next-line no-useless-escape
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value),
                'Invalid email address',
            ],
        },
        password: {
            // User Password
            type: String,
            required: [true, 'User has to have a password'],
            trim: true,
            maxlength: [
                40,
                'The password must be less than or equal to 40 characters long',
            ],
            minlength: [
                5,
                'The password must be more than or equal to 5 characters long',
            ],
        },
        role: {
            // User Role
            type: Number,
            required: [true, 'User has to have a role'],
        },
        status: {
            // User Active
            type: Boolean,
            required: [true, 'User has to have a status'],
            default: true,
        },
        createdAt: {
            // User Date Created
            type: Date,
            required: [true, 'User has to have a date created'],
            default: Date.now(),
        },

        updatedAt: {
            // User Date Updated
            type: Date,
            required: [true, 'User has to have a date updated'],
            default: Date.now(),
        },
    },
    {
        strict: 'throw',
    }
);

usersSchema.pre('findOneAndUpdate', function (next) {
    // This middleware will be executed before the update operation
    this.update({}, { $set: { updatedAt: new Date() } });
    next();
});

usersSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

usersSchema.post('init', function (doc) {
    // This middleware will be executed after the document is retrieved and converted into a Mongoose object

    doc.set('__v', undefined);
});

const Users = mongoose.model('User', usersSchema);

export default Users;
