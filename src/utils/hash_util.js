import argon2 from 'argon2';
import { logger } from '../logger.js';

export const hashPw = async (password) => {
  try {
    return await argon2.hash(password);
  } catch (error) {
    logger.error(`Error hashing password: ${error}`);
  }
};

export const verifyPw = async (hashedPassword, password) => {
  try {
    return await argon2.verify(hashedPassword, password);
  } catch (error) {
    logger.error(`Error verifying password: ${error}`);
  }
};
