import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../../../backend/routers/_app';

export const trpc = createTRPCReact<AppRouter>();
