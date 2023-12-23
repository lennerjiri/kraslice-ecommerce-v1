import Router from 'koa-router';

// Import the controller functions
import { signIn, optionsAuth } from '../controllers/authcontroller.js';

// Create a router instance
const authRouter = new Router({ prefix: '/api/v1/login' });

// Define a route
authRouter.post('/', signIn);
authRouter.options('/', optionsAuth);

// Export the router
export { authRouter };
