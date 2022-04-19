import React, { useState } from "react";

const Questions = (props) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="container">
      <div className="block">
        <div className="flexQuesion">
          <div>
            <h3>{props.question}</h3>
          </div>
          <div>
            <button onClick={handleClick}>+</button>
          </div>
        </div>
        {active && (
          <div className="answer">
            <p>{props.answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Questions;
