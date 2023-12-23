import Router from 'koa-router';

// Import the controller functions
import {
    getAllOrders,
    getOneOrder,
    createOrder,
    updateOrder,
    deleteOrder,
    optionsOrders,
} from '../controllers/orderscontroller.js';

// Create a router instance
const ordersRouter = new Router({ prefix: '/api/v1/orders' });

// Define a route
ordersRouter.get('/', getAllOrders);
ordersRouter.get('/:id', getOneOrder);
ordersRouter.post('/', createOrder);
ordersRouter.patch('/:id', updateOrder);
ordersRouter.delete('/:id', deleteOrder);
ordersRouter.options('/', optionsOrders);

// Export the router
export { ordersRouter };
