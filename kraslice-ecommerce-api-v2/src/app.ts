import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import serve from 'koa-static';
import mount from 'koa-mount';
import path from 'path';
import dotenv from 'dotenv';

// Routes
import { productsRouter } from './routes/productsroutes.js';
import { ordersRouter } from './routes/ordersroutes.js';
import { usersRouter } from './routes/usersroutes.js';
import { authRouter } from './routes/authroutes.js';

// Utils
import { loggerMiddleware } from './utils/logger.js';
import { assignRequestId } from './utils/uuid.js';
import errorController from './controllers/errorcontroller.js';

// Create an app instance
const app = new Koa();

// Add a unique request id to each request
app.use(assignRequestId);

// Add bunyan logger middleware
app.use(loggerMiddleware);

// Load environment variables
dotenv.config({ path: '.env' });

// Serve static files
app.use(mount('/api/v1/public', serve(process.cwd() + '/dist/public')));

// Use body parser middleware to parse request bodies
app.use(bodyParser());

// Register the router middleware
app.use(productsRouter.routes());
app.use(ordersRouter.routes());
app.use(usersRouter.routes());
app.use(authRouter.routes());

// Central error handler
app.on('error', errorController);

// Export the app
export { app };
