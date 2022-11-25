import React from "react";
import { useQuery } from "react-query";

const useQueryCustom = (props: any) => {
  const query = useQuery(
    props.name,
    () => props.func(),
    props.options
  );

  if (query.isLoading) return <p>Loading..</p>;
  if (query.error) return <p>Error request</p>;
  return query
};
export default useQueryCustom;
