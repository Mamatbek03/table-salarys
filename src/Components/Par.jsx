import React, { useState } from "react";

const Par = (props) => {
  let [paragraph, setParagraph] = useState("");

  let handleInput = (e) => {
    setParagraph(e.target.value);
  };

  const paragraphAdd = () => {
    const newPar = {
      par: paragraph,
      id: Date.now(),
    };
    props.handlePar(newPar);
    setParagraph("");
  };
  return (
    <div>
      <input type="text" value={paragraph} onChange={handleInput} />
      <button onClick={paragraphAdd}>add</button>
    </div>
  );
};

export default Par;
