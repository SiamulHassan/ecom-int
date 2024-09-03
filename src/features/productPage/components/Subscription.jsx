import React, { useState } from "react";
import SubscriptionOption from "./SubscriptionOption";
import OneTimeOption from "./OneTimeOption";

const Subscription = () => {
  const [selected, setSelected] = useState("subscription");

  return (
    <>
      <SubscriptionOption selected={selected} setSelected={setSelected} />
      <OneTimeOption selected={selected} setSelected={setSelected} />
    </>
  );
};

export default Subscription;
