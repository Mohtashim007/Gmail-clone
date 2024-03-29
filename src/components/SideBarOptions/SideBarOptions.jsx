import React from "react";
import "./SideBarOptions.css";

const SideBarOptions = ({ Icon, title, number, selected }) => {
  return (
    <div className={`sidebaroption ${selected && "sidebaroption_active"}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};

export default SideBarOptions;
