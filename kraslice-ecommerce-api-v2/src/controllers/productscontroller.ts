import Products from '../model/productsmodel.js';
import { Context } from 'koa';
import {
    IProduct,
    INewProduct,
    ICreatedProduct,
    IUpdateProduct,
} from '../interfaces/productinterfaces.js';

const getAllProducts = async (ctx: Context) => {
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

        const allProducts = await Products.find()
            .skip((parsedPage - 1) * parsedLimit)
            .limit(parsedLimit)
            .select('-updatedAt -createdAt');

        ctx.body = {
            data: allProducts,
        };
    } catch (err: unknown) {
        if (err instanceof Error) {
            ctx.app.emit('error', err, ctx);
        }
    }
};

const getOneProduct = async (ctx: Context) => {
    try {
        const oneProduct = await Products.findById(ctx.params.id).select(
            '-updatedAt -createdAt'
        );

        if (!oneProduct) {
            ctx.throw(404, {
                message: 'Product not found',
                id: ctx.params.id,
            });
        }

        ctx.status = 200;
        ctx.body = {
            data: [oneProduct],
        };
    } catch (err: unknown) {
        if (err instanceof Error) {
            ctx.app.emit('error', err, ctx);
        }
    }
};

const createProduct = async (ctx: Context) => {
    try {
        const newProductData = ctx.request.body as INewProduct;

        if (
            Object.keys(newProductData).length === 0 ||
            Object.keys(newProductData.data).length === 0
        ) {
            ctx.throw(400, {
                message: 'Empty request body',
            });
        }

        const newProduct = (await Products.create(
            newProductData.data
        )) as unknown as ICreatedProduct;

        newProduct.updatedAt = undefined;
        newProduct.createdAt = undefined;
        newProduct.__v = undefined;

        ctx.status = 201;
        ctx.body = {
            data: [newProduct],
        };
    } catch (err: unknown) {
        if (err instanceof Error) {
            ctx.app.emit('error', err, ctx);
        }
    }
};

const updateProduct = async (ctx: Context) => {
    try {
        const updatedUserData = ctx.request.body as IUpdateProduct;

        if (
            Object.keys(updatedUserData).length === 0 ||
            Object.keys(updatedUserData.data).length === 0
        ) {
            ctx.throw(400, {
                message: 'Empty request body',
            });
        }

        const updatedProduct = await Products.findByIdAndUpdate(
            ctx.params.id as string,
            updatedUserData.data,
            { new: true }
        ).select('-updatedAt -createdAt');

        if (!updatedProduct) {
            ctx.throw(404, {
                message: 'Product not found',
                id: ctx.params.id,
            });
        }

        ctx.status = 200;
        ctx.body = {
            data: [updatedProduct],
        };
    } catch (err: unknown) {
        if (err instanceof Error) {
            ctx.app.emit('error', err, ctx);
        }
    }
};

const deleteProduct = async (ctx: Context) => {
    try {
        const deletedProduct = await Products.findByIdAndDelete(
            ctx.params.id as string
        );

        if (!deletedProduct) {
            ctx.throw(404, {
                message: 'Product not found',
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

const optionsProduct = async (ctx: Context) => {
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
    getAllProducts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    optionsProduct,
};
