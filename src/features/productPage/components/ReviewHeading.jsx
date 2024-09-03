import React from "react";
import Typography from "../../../ui/Typography";
import ButtonSecondary from "../../../ui/ButtonSecondary";

const ReviewHeading = ({ handleReview }) => {
  return (
    <div className="review_form">
      <Typography variant="h2" color="text-secondary_color">
        Reviews
      </Typography>
      <ButtonSecondary width="17.9rem" onclick={handleReview}>
        Write a Review
      </ButtonSecondary>
    </div>
  );
};

export default ReviewHeading;
