import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cnMerge = (...inputs) => {
  return twMerge(clsx(inputs));
};

export default cnMerge;
