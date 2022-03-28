import { NextFunction, Request, Response } from 'express';

import { IMiddleware, HttpRequest } from '../../protocols';

export const adaptMiddleware = (middleware: IMiddleware) => async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  const httpRequest: HttpRequest = {
    headers: req.headers,
    ip: req.ip,
  };

  try {
    const httpResponse = await middleware.handle(httpRequest);

    Object.assign(req, httpResponse.body);
    return next();
  } catch (error: any) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};
