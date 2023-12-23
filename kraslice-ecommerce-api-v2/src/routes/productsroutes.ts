import Router from 'koa-router';

// Import the controller functions
import {
    getAllProducts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    optionsProduct,
} from '../controllers/productscontroller.js';

// Route protection middleware
import { routeProtector } from '../controllers/authcontroller.js';

// Create a router instance
const productsRouter = new Router({ prefix: '/api/v1/products' });

// Define a route
productsRouter.get('/', getAllProducts);
productsRouter.get('/:id', getOneProduct);
productsRouter.post('/', routeProtector, createProduct);
productsRouter.patch('/:id', routeProtector, updateProduct);
productsRouter.delete('/:id', routeProtector, deleteProduct);
productsRouter.options('/', optionsProduct);

// Export the router
export { productsRouter };
