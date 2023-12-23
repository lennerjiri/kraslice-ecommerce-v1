import Router from 'koa-router';

// Import the controller functions
import {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    optionsUsers,
} from '../controllers/userscontroller.js';

// Route protection middleware
import { routeProtector } from '../controllers/authcontroller.js';

// Create a router instance
const usersRouter = new Router({ prefix: '/api/v1/users' });

// Define a route
usersRouter.get('/', routeProtector, getAllUsers);
usersRouter.get('/:id', routeProtector, getOneUser);
usersRouter.post('/', routeProtector, createUser);
usersRouter.patch('/:id', routeProtector, updateUser);
usersRouter.delete('/:id', routeProtector, deleteUser);
usersRouter.options('/', optionsUsers);

// Export the router
export { usersRouter };
