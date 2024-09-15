import { errorResponse } from '../utils/response_util.js';

export const errorHandler = async (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  const stack = process.env.NODE_ENV === 'DEV' ? err.stack : undefined;

  errorResponse(res, statusCode, message, stack);

  res.status(statusCode).json({
    success: false,
    message: message,
    stack: process.env.NODE_ENV === 'DEV' ? err.stack : undefined,
  });
};
