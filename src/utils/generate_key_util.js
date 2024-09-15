import { randomBytes } from 'crypto';

export const generateSecretKey = (length = 64) => randomBytes(length).toString('hex');
