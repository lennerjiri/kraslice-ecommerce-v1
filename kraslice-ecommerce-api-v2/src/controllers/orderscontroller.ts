import { Context } from 'koa';

const getAllOrders = async (ctx: Context) => {
    ctx.body = 'Get all users!';
};

const getOneOrder = async (ctx: Context) => {
    ctx.body = 'Get one user!';
};

const createOrder = async (ctx: Context) => {
    ctx.body = 'Create new user!';
};

const updateOrder = async (ctx: Context) => {
    ctx.body = 'Update user!';
};

const deleteOrder = async (ctx: Context) => {
    ctx.body = 'Delete user!';
};

const optionsOrders = async (ctx: Context) => {
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
    getAllOrders,
    getOneOrder,
    createOrder,
    updateOrder,
    deleteOrder,
    optionsOrders,
};
