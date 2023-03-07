import React from "react";

const ParRender = (props) => {
  return (
    <div>
      {props.par.map((item) => (
        <p key={item.id}>{item.par}</p>
      ))}
    </div>
  );
};

export default ParRender;
