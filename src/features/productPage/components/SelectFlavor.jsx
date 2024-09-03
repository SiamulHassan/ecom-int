import React, { useState } from "react";
import Typography from "../../../ui/Typography";

const SelectFlavor = ({ flavor }) => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      {flavor.map((productFlavor, i) => (
        <div className="grid grid-cols-1 items-center" key={i}>
          <input
            type="radio"
            id={`flavor-${i}`}
            name="flavor"
            className="hidden"
            checked={selected === i}
            onChange={() => setSelected(i)}
          />
          <label
            htmlFor={`flavor-${i}`}
            className={`grid grid-cols-[0.2fr_1fr] items-center gap-x-2 cursor-pointer px-[1rem] py-[0.5rem] rounded-full`}
          >
            <span
              className={`w-[1.5rem] h-[1.5rem] rounded-full ${
                selected === i ? "bg-secondary_color" : "bg-color_D9D"
              } flex items-center justify-center`}
            ></span>
            <Typography variant="span_normal_16">{productFlavor}</Typography>
          </label>
        </div>
      ))}
    </>
  );
};

export default SelectFlavor;
