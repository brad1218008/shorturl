import express from "express";
import {ShortController} from '../controllers/short';
const shortRouter = express.Router();
const controller = new ShortController();

shortRouter.get('/:id', controller.getById);
shortRouter.post('/', controller.create);
shortRouter.delete('/:id', controller.remove);

export = shortRouter;