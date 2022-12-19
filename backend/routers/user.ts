import { z } from 'zod';
import { publicProcedure, router } from "../trcp";

export const userRouter = router({
  getUser: publicProcedure.input(z.string()).query((req) => {
    req.input; // string
    return { id: req.input, name: 'Bilbo' };
  })
});