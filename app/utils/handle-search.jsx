import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

function HandleSearch(searchValue) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["search-room"],
    queryFn: async () => {
      const { data } = await axios.get("");
      return data;
    },
  });
  return <div></div>;
}

export default HandleSearch;
