import { userRouter } from "./user";
import { boardRouter } from "./board";
import { listRouter } from "./list";
import { router } from "../trcp";

export const appRouter = router({
  user: userRouter,
  board: boardRouter,
  list: listRouter
})

export type AppRouter = typeof appRouter;
