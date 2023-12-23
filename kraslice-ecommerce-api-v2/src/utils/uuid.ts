import Koa from 'koa';
import { v4 as uuidv4 } from 'uuid';

const assignRequestId = async (ctx: Koa.Context, next: Koa.Next) => {
    ctx.state.requestId = uuidv4();
    await next();
};

export { assignRequestId };
