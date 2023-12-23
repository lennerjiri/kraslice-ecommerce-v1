import Koa from 'koa';
import { IQueryError } from '../interfaces/errorinterfaces.js';

/**
 * Handle errors from mongoose queries
 * @param {object} err - Error object
 * @param {object} ctx - Koa context
 */
const handleQueryErrors = (err: IQueryError, ctx: Koa.Context) => {
    switch (err.name) {
        case 'ValidationError':
            if (err.errors) {
                ctx.status = 400;
                ctx.body = {
                    error: `${err.errors[Object.keys(err.errors)[0]].message}`,
                };
            } else {
                ctx.status = 500;
                ctx.body = {
                    error: 'Internal server error',
                };
            }
            break;
        case 'CastError':
            if (err.kind === 'ObjectId') {
                ctx.status = 400;
                ctx.body = {
                    error: `${err.value} is not a valid id`,
                };
            } else {
                ctx.status = 500;
                ctx.body = {
                    error: 'Internal server error',
                };
            }
            break;
        case 'NotFoundError':
            ctx.status = 404;
            ctx.body = {
                error: {
                    message: err.message,
                    id: err.id,
                },
            };
            break;
        case 'MongoServerError':
            if (err.message.startsWith('E11000')) {
                ctx.status = 400;
                ctx.body = {
                    error: `${Object.keys(err.keyValue)[0]} ${
                        err.keyValue[Object.keys(err.keyValue)[0]]
                    } is already in registered`,
                };
            } else {
                ctx.status = 500;
                ctx.body = {
                    error: 'Internal server error',
                };
            }
            break;
        case 'BadRequestError':
            if (err.page || err.limit) {
                ctx.status = 400;
                ctx.body = {
                    error: err.message,
                };
            } else if (err.message === 'Empty request body') {
                ctx.status = 400;
                ctx.body = {
                    error: err.message,
                };
            } else {
                ctx.status = 500;
                ctx.body = {
                    error: 'Internal server error',
                };
            }
            break;
        case 'StrictModeError':
            ctx.status = 400;
            ctx.body = {
                error: `Field '${err.path}' is not a property of this model`,
            };
            break;
    }
};

/**
 * Central error controller callback handling for all errors
 * @param {object} err - Error object
 * @param {object} ctx - Koa context
 */

const errorController = async (err: IQueryError, ctx: Koa.Context) => {
    // Dev

    //console.log(err.name);
    if (process.env.NODE_ENV === 'development') {
        // Handle users errors
        // Handle Mongo errors

        if (
            err.name == 'ValidationError' ||
            err.name == 'CastError' ||
            err.name == 'MongoServerError' ||
            err.name == 'NotFoundError' ||
            err.name == 'BadRequestError' ||
            err.name == 'StrictModeError'
        ) {
            // Query
            handleQueryErrors(err, ctx);
        } else if (err.name == 'UnauthorizedError') {
            // Auth

            ctx.status = 401;
            ctx.body = {
                error: err.message,
            };
        } else {
            // Internal server error
            // Body parser error

            ctx.status = 500;
            ctx.body = {
                error: 'Internal server error',
            };
        }
    } else {
        // Prod
    }
};

export default errorController;
