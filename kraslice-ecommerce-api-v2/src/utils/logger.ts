import Koa from 'koa';
import winston from 'winston';

const { combine, timestamp, printf, colorize } = winston.format;

const logFormat = printf(({ message, timestamp }) => {
    return `[${timestamp}]${message}`;
});

const logger = winston.createLogger({
    level: 'info',
    format: combine(
        colorize(),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        logFormat
    ),
    transports: [new winston.transports.Console()],
});

const loggerMiddleware = async (ctx: Koa.Context, next: Koa.Next) => {
    const { method, url, state } = ctx;
    const start = Date.now();
    await next();
    const responseTime = Date.now() - start;

    logger.info(
        process.env.NODE_ENV === 'production'
            ? `: ${method} ${url} ${responseTime}ms --> ${ctx.response.status}`
            : ` [${state.requestId}]: ${method} ${url} ${responseTime}ms --> ${ctx.response.status}`
    );
};

export { loggerMiddleware };
