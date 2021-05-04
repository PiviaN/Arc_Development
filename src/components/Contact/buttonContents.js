import React from "react";

import airplane from "../../assets/send.svg";

const ButtonContents = () => {
  return (
    <>
      Send Message
      <img src={airplane} alt="paper airplane" style={{ marginLeft: "1em" }} />
    </>
  );
};

export default ButtonContents;
