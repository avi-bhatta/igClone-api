export const errorResponse = (res, statusCode, message) => {
  const response = { success: false, message: message };

  if (stack) response.stack = stack;

  return res.status(statusCode).json(response);
};
// res.status(statusCode).json({
//   success: false,
//   message: message,
// });

export const successResponse = (res, statusCode, message, data, accessToken, refreshToken) => {
  const response = { success: true, message: message };

  if (data) response.data = data;
  if (accessToken) response.accessToken = accessToken;
  if (refreshToken) response.refreshToken = refreshToken;

  return res.status(statusCode).json(response);
};
