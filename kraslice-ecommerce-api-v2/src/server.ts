// Import app
import mongoose from 'mongoose';
import { app } from './app.js';
import { formatDate } from './utils/formatdate.js';

// Start the server and get the database connection
(async function startServer() {
    // Load the Database
    mongoose.set('strictQuery', false);

    mongoose.connection.once('open', () => {
        console.log(`[${formatDate(new Date())}]: ✓ Database connected`);
    });

    mongoose.connection.on('error', (err) => {
        console.log(
            `[${formatDate(new Date())}]: ✗ Database connection failed`
        );
        console.log(
            `[${formatDate(
                new Date()
            )}]: ✗ Server aborting operation due to error`
        );
        console.log(err.stack);
        process.exit(1);
    });

    await mongoose.connect(process.env.MONGODB_URI as string);

    // Start the server
    const port = process.env.PORT;
    app.listen(port, () => {
        console.log(
            `[${formatDate(new Date())}]: ✓ Server listening on port ${port}`
        );
    });
})();
