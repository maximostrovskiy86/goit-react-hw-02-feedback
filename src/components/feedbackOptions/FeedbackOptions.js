import React from "react";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <form className="form-btn">
        <button name="good" type="button" onClick={onLeaveFeedback}>
          Good
        </button>
        <button name="neutral" type="button" onClick={onLeaveFeedback}>
          Neutral
        </button>
        <button name="bad" type="button" onClick={onLeaveFeedback}>
          bad
        </button>
      </form>
    </>
  );
};

export default FeedbackOptions;
