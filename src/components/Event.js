import React from "react";

const Event = (props) => {
  const { event } = props;

  return (
    <div className={"event"}>
      <h2>* * *</h2>
      <p>{event}</p>
    </div>
  );
};

export default Event;
