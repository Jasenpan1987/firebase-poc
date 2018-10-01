import React from "react";
import { Navbar } from "./Navbar";

const Layout = ({ isAuthenticated, handleSignOut, children }) => {
  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} handleSignOut={handleSignOut} />
      <div className="container">{children}</div>
    </div>
  );
};

export { Layout };
