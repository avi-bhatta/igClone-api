import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';

import { env, logDIR } from './config.js';

const { combine, colorize, timestamp, printf, prettyPrint, errors, json } = format;

const logFormat = printf(({ timestamp, level, stack, message }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

export const logger = createLogger({
  level: env === 'PROD' ? 'warn' : 'debug',
  format: combine(errors({ stack: true }), timestamp({ format: 'MM-DD-YY HH:mm:ss' }), logFormat),
  transports: [
    new transports.Console({
      level: 'debug',
      format: combine(colorize(), prettyPrint(), logFormat),
      handleExceptions: true,
    }),
    new transports.DailyRotateFile({
      level: 'info',
      dirname: logDIR,
      filename: '%DATE%.log',
      datePattern: 'MM-DD-YY',
      maxFiles: '30d',
      zippedArchive: true,
      format: combine(json()),
      handleExceptions: true,
    }),
  ],
  exitOnError: false,
  exceptionHandlers: [new transports.File({ filename: 'logs/exceptions.log' })],
  rejectionHandlers: [new transports.File({ filename: 'logs/rejections.log' })],
});
