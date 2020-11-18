import React from "react";
import UserInfo from "./UserInfo/UserInfo";
import Theme from "./Theme/Theme";
import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <UserInfo />
      <Theme />
    </div>
  );
};

export default Header;