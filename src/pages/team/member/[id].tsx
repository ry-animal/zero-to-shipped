import { useStringParam } from "@/utils/utils";
import React from "react";

const MemberIdPage = () => {
  const id = useStringParam("id");
  return <div>{id}</div>;
};

export default MemberIdPage;
