import express from "express";
import {get, getById, create, update, remove} from '../controllers/short.controller';
const shortRouter = express.Router();

shortRouter.get('/', get);
shortRouter.get('/:id', getById);
shortRouter.post('/', create);
shortRouter.put('/', update);
shortRouter.delete('/:id', remove);

export = shortRouter;