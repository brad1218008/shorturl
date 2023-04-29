import {NextFunction, Request, Response} from "express";
import {logger} from "../utils/logger";

export const request = (req: Request, res: Response, next: NextFunction) => {
  try {
    logger.debug(`${req.method} ${req.originalUrl} ${JSON.stringify(req.body)}`);
    next();
    logger.info(`${req.method} ${req.originalUrl} ${res.statusCode}`);
  } catch (err) {
    logger.error(`${req.method} ${req.originalUrl} 500`);
    logger.error(err);
    res.sendStatus(500);
  }
}