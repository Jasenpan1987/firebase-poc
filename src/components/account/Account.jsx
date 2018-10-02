import React from "react";
import { NavLink } from "react-router-dom";

const Account = () => {
  return (
    <div>
      <h1>Account</h1>
      <NavLink to="/changepassword" className="btn btn-danger">
        Change Password
      </NavLink>
      <NavLink to="/resetpassword" className="btn btn-warning">
        Reset Password
      </NavLink>
    </div>
  );
};
export { Account };
