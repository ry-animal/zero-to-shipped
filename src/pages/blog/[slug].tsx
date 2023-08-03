import { useStringParam } from "@/utils/utils";
import React from "react";

const Slugs = () => {
  const slug = useStringParam("slug");
  return <div>{slug}</div>;
};

export default Slugs;
