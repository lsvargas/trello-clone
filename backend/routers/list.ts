const { PrismaClient } = require('@prisma/client');
import { z } from 'zod';
import { publicProcedure, router } from "../trcp";

const prisma = new PrismaClient();

export const listRouter = router({
  getLists: publicProcedure
    .query(async () => {
      const lists = await prisma.list.findMany()

      return lists      
    }),
  
  createList: publicProcedure
    .input(z.object({ boardId: z.string(), name: z.string() }))
    .mutation(async ({ input }) => {
      const list = await prisma.list.create({
        data: {
          name: input.name,
          boardId: parseInt(input.boardId, 10)
        },
      })

      return list;
    })

});
