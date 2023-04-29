import express from "express";
import {RedirectController} from "../controllers/redirect";
const redirectRouter = express.Router();
const controller = new RedirectController();

redirectRouter.get('/:id', controller.redirectById);

export = redirectRouter;