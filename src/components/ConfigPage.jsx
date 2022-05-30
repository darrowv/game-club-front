import React from "react";

const ConfigPage = (props) => {
  return (
    <div className="cart_config">
      <div>
        <img src={props.img} alt="" />
      </div>
      <div>
        <h1>{props.title}</h1>
      </div>
      <div className="config_p">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default ConfigPage;
