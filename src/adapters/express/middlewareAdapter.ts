import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../appError';

import { IMiddleware, HttpRequest } from '../../protocols';

export const adaptMiddleware = (middleware: IMiddleware) => async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  const httpRequest: HttpRequest = {
    headers: req.headers,
  };

  try {
    const httpResponse = await middleware.handle(httpRequest);

    Object.assign(req, httpResponse.body);
    return next();
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    return res.status(500).json({ error: 'Erro interno' });
  }
};
