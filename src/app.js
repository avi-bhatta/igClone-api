import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import { corsURL } from './config.js';
import './database/db.js';
import { errorHandler } from './middlewares/error_handler_middlware.js';
import { asyncHandler } from './utils/async_handler_util.js';

export const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(helmet());
app.use(cookieParser());
app.use(cors({ origin: corsURL }));

// Example asynchronous function
const fetchData = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Uncomment the line below to simulate an error
            reject(new Error('Simulated error'));
            // resolve('Data fetched successfully!');
        }, 1000);
    });
};

// Asynchronous route handler using asyncHandler
app.get('/data', asyncHandler(async (req, res) => {
    const data = await fetchData();
    res.json({ message: data });
}));

app.use(errorHandler);
