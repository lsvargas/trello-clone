import express from "express";
import * as trpcExpress from '@trpc/server/adapters/express';
import cors from "cors";
import { createContext } from "./trcp";
import { appRouter } from "./routers/_app";

const app = express();

// app.use(async (req, _res, next) => {
//   // request logger
//   console.log('⬅️ ', req.method, req.path, req.body ?? req.query);
//   next();
// });

app.use(cors());

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);


app.listen(4000);
