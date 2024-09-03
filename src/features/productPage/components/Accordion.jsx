import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import Typography from "../../../ui/Typography";
import { accordionListsItem } from "../../../fake_api/accordionLists";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(0);
  const toggleAccordion = (idx) => {
    isOpen === idx ? setIsOpen(null) : setIsOpen(idx);
  };
  return (
    <div className="wrapper my-[4.5rem] order-last lg:order-first">
      {accordionListsItem.map((lists, i) => (
        <div
          key={i}
          className="border-b border-border_DCD last:border-b-0 py-[1.2rem]"
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion(i)}
          >
            <Typography variant="span_normal_24" className="font-semibold">
              {lists.title}
            </Typography>
            {isOpen === i ? (
              <FiMinus size={20} className="text-primary_color" />
            ) : (
              <FiPlus size={20} className="text-primary_color" />
            )}
          </div>
          <ul
            className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
              isOpen === i ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {lists?.listsItem?.map((item, j) => (
              <li className="pl-5 pb-4" key={j}>
                <Typography variant="span_normal_16">{item}</Typography>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
