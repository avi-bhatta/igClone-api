import mongoose from 'mongoose';
import { dbInfo } from '../config.js';
import { logger } from '../logger.js';

const dbURI = `mongodb+srv://${dbInfo.user}:${encodeURIComponent(dbInfo.pwd)}@${dbInfo.cluster}/ig_clone`;

const options = {
  connectTimeoutMS: 30000, // Give up initial connection after 30 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
};

async function connectToDB() {
  try {
    await mongoose.connect(dbURI, options);
    logger.info('Connected to MongoDB ✅');
  } catch (error) {
    logger.error(`Error connecting to MongoDB ❌: ${error}`);
  }
}

connectToDB();

mongoose.connection.on('connected', () => logger.info(`Mongoose default connection open to: ${dbInfo.cluster}`));
mongoose.connection.on('error', (err) =>
  logger.error(`Mongoose default connection error: ${err.message}`, {
    stack: err.stack,
  })
);
mongoose.connection.on('disconnected', () => logger.info('Mongoose default connection disconnected'));

const gracefulShutdown = (message, callback) =>
  mongoose.connection.close().finally(() => {
    logger.info(`Mongoose default connection disconnected through ${message}`);
    callback();
  });

process.on('SIGINT', () => gracefulShutdown('app termination', () => process.exit(0)));
