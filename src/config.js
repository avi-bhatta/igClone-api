import dotenv from 'dotenv';
dotenv.config();

export const env = process.env.NODE_ENV || 'DEV';

export const port = process.env.PORT || 3773;

export const corsURL = process.env.CORS_URL || '';

export const dbInfo = {
  user: process.env.DB_USER || '',
  pwd: process.env.DB_PWD || '',
  cluster: process.env.DB_CLUSTER || '',
};

export const tokenInfo = {
  accessToken: process.env.ACCESS_TOKEN,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
  accessTokenValidity: parseInt(process.env.ACCESS_TOKEN_VALIDITY || '0'),

  refreshToken: process.env.REFRESH_TOKEN,
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
  refreshTokenValidity: parseInt(process.env.REFRESH_TOKEN_VALIDITY || '0'),
};

export const logDIR = process.env.LOGS_DIR;
