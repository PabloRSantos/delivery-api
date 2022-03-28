import { Request, Response } from 'express';
import { HttpRequest, IController } from '../../protocols';

export const adaptRoute = (controller: IController) => async (req: Request, res: Response): Promise<Response> => {
  const httpRequest: HttpRequest = {
    body: req.body,
    params: req.params,
    query: req.query,
  };

  try {
    const httpResponse = await controller.handle(httpRequest);

    return res.status(httpResponse.statusCode).json(httpResponse.body);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
