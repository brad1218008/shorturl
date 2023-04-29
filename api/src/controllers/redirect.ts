import {Request, Response} from "express";
import {ShortService} from "../services/short";
import * as dotenv from "dotenv";

// load development env
if (process.env.NODE_ENV?.trim() === 'dev') {
  dotenv.config({ path: '.env.local' });
} else {
  dotenv.config();
}

export class RedirectController {
  private service = new ShortService();

  public redirectById = async (req: Request, res: Response) => {
    const result = await this.service.getById(req.params.id);
    !!result?.id ?
      res.setHeader("Location", result.originUrl).sendStatus(301):
      res.sendStatus(404);
  }
}