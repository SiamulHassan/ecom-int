import React from "react";
import Typography from "../../../ui/Typography";

const FrequentTitle = () => {
  return (
    <div className="container title mb-[4rem]">
      <Typography variant="h2" color="text-primary_color">
        Frequently Bought Together
      </Typography>
      <Typography
        variant="p_bold_16"
        color="text-primary_color"
        className="max-w-[112rem] w-full italic mt-[1.4rem]"
      >
        In the dynamic world of e-commerce, the &#34;Frequently Bought
        Together&#34; feature has become a cornerstone of the online shopping
        experience. This tool leverages the power of data analytics and consumer
        behavior insights to suggest complementary products that are often
        purchased in conjunction with the item a customer is viewing. By
        highlighting these related products, retailers aim to increase sales,
        improve customer satisfaction, and streamline the shopping process.
      </Typography>
    </div>
  );
};

export default FrequentTitle;
