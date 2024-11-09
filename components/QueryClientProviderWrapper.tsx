"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

export const query_client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchOnMount: true,
      retry: 2,
    },
  },
});

const QueryClientProviderWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={query_client}>
      {children}
    </QueryClientProvider>
  );
};

export default QueryClientProviderWrapper;
