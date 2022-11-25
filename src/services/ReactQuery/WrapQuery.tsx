import { ReactNode } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
const queryClient = new QueryClient();

type TypeProps={
    children: ReactNode;
}
function WrapQuery(props:TypeProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}
export default WrapQuery;