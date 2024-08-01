import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry(failureCount, error) {
        if (error) return false;
        else if (failureCount < 2) return true;
        else return false;
      },
    },
  },
});
