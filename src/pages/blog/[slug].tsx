import { useParam } from "@blitzjs/next";
import React from "react";

const Slugs = () => {
  const slug = useParam("slug", "string");
  return <div>{slug}</div>;
};

export default Slugs;
