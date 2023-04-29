import express, { Express} from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import shortRouter from "../routes/short";
import redirectRouter from '../routes/redirect';
import {Data} from "../../datasource";
import {request} from "../handlers/request";

// load development env
if (process.env.NODE_ENV?.trim() === 'dev') {
  dotenv.config({ path: '.env.local' });
} else {
  dotenv.config();
}

export const createServer = async (): Promise<Express> => {

  const app: Express = express();
  const port = process.env.PORT;

  console.log(process.env);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(request)

  await databaseInit();

  app.use('/api/short', shortRouter);

  app.use('/s', redirectRouter);

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });

  return app;
}

const databaseInit = async () => {

  // link to database
  await Data.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization:", err)
    });
}
