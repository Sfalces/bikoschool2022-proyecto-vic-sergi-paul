import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import low from "lowdb";
import { memesRouter } from "./routes/memes";
import { UsersRouter } from "./routes/Users";
import { DataBaseSchema } from "./db/memes";
import cors from "cors";


export const createApp = (db: low.LowdbSync<DataBaseSchema>) => {
  const app: Express = express();

  // Shows request log on terminal
  // https://github.com/expressjs/morgan
  app.use(morgan("common"));

  // Parses incoming requests with JSON payloads
  // http://expressjs.com/es/api.html#express.json
  app.use(express.json());

  app.use(cors());

  // Parses incoming requests with urlencoded payloads
  // http://expressjs.com/es/api.html#express.urlencoded
  app.use(express.urlencoded({ extended: false }));

  // Aceptamos peticiones cruzadas de clientes hosteados
  // por otros servidores
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  // Add our application routes
  app.use("/memes", memesRouter(db));
  app.use("/users", UsersRouter(db));


  // Return 404 if no handler generates a response
  app.use((req: Request, res: Response) => {
    res.sendStatus(404);
  });

  return app;
};
