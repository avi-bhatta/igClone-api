import jwt from 'jsonwebtoken';

export const generateToken = (payload, secretKey, tokenValidity) =>
  jwt.sign(payload, secretKey, { expiresIn: tokenValidity });

export const verifyToken = (token, secretKey) => jwt.verify(token, secretKey);
