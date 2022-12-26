
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { useState } from 'react';
import { trpc } from './utils/trpc';

import NoMatch from "./components/NoMatch";
import Layout from "./components/Layout";
import Board from "./pages/board";
import Home from "./pages/home";

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({ url: 'http://localhost:4000/trpc' })
      ]
    })
  );

  return (
    <div className="bg-[#16213E] text-white">
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/board/:id" element={<Board />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </QueryClientProvider>
      </ trpc.Provider>
    </div>
  )
}

export default App
