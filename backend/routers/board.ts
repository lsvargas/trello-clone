const { PrismaClient } = require('@prisma/client');
import { z } from 'zod';
import { publicProcedure, router } from "../trcp";

const prisma = new PrismaClient();

export const boardRouter = router({
  getBoard: publicProcedure
    .input(z.object({ boardId: z.string() }))
    .query(async ({ input }) => {
      const board = await prisma.board.findUnique({
        where: {
          id: parseInt(input.boardId, 10),
        },
        include: {
          lists: true
        }
      })

      return board      
    })
});
