import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { AccessTime, Search, HelpOutline } from "@material-ui/icons";
import { useProvider } from "./Provider/Provider";

function Header() {
  const [{user}] = useProvider();
  
  return (
    <div className="header">
      <div className="header__left">
        <Avatar className="header__avatar" alt={user?.displayName} src={user?.photoURL} />
        <AccessTime />
      </div>
      <div className="header__search">
        <Search />
        <input placeholder="Search Chats" />
      </div>
      <div className="header__right">
        <HelpOutline />
      </div>
    </div>
  );
}

export default Header;
