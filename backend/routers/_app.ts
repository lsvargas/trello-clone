import { userRouter } from "./user";
import { router } from "../trcp";


export const appRouter = router({
  user: userRouter
})