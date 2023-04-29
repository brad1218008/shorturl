import {Request, Response} from "express";
import {ShortService} from "../services/short";

export class ShortController {
  private service = new ShortService();

  public getById = async (req: Request, res: Response) => {
    const result = await this.service.getById(req.params.id);
    !!result?.id ?
      res.send(result) :
      res.sendStatus(404);
  }

  public create = async (req: Request, res: Response) => {
    if(!req.body.originUrl) {
      res.status(400).send("originUrl is required")
    }
    const result = await this.service.create(req.body.originUrl);
    res.send(result);
  }

  public remove = async (req: Request, res: Response) => {
    await this.service.remove(req.params.id);
    res.sendStatus(204);
  }
}