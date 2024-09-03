import React from "react";

import Accordion from "./Accordion";
import AccordionImg from "./AccordionImg";

const ProductAccordion = () => {
  return (
    <div className="px-[1rem] border-t border-b border-border_DCD mb-8">
      <div className="container grid-cols-1 grid lg:grid-cols-[1.5fr_1fr] items-center gap-x-10">
        <Accordion />
        <AccordionImg />
      </div>
    </div>
  );
};

export default ProductAccordion;
