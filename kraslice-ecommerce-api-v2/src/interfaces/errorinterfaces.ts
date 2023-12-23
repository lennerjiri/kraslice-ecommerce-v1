interface IQueryError extends Error {
    // Validation error
    errors: {
        // Validation Error
        [key: string]: {
            message: string;
            type: string;
            path: string;
            value: string;
        };
    };

    // Cast error
    kind: string;
    value: string;

    // Body parser
    body: string;
    status: number;

    // Duplicate key error
    keyValue: { [key: string]: string };

    // Not found error & query param error (bad request)
    message: string;

    // Not found error
    id: string;

    // Query param error (bad request)
    page: number;
    limit: number;

    // Strict mode error
    path: string;
}

export { IQueryError };
