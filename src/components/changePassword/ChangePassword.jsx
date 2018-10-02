import React, { Component } from "react";

class ChangePassword extends Component {
  state = {
    newPassword: "",
    reNewPassword: ""
  };

  handleFieldChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { newPassword, reNewPassword } = this.state;
    if (newPassword !== reNewPassword) {
      alert("Passwords don't match");
      this.setState({
        newPassword: "",
        reNewPassword: ""
      });
    } else {
      this.props.handleChangePassword(newPassword);
    }
  };

  render() {
    return (
      <div className="mt-4">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              aria-describedby="newPassword"
              placeholder="New Password"
              onChange={this.handleFieldChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Confirm your password</label>
            <input
              type="password"
              className="form-control"
              id="reNewPassword"
              placeholder="Confirm Password"
              onChange={this.handleFieldChange}
            />
          </div>

          <button type="submit" className="btn btn-danger">
            Change Password
          </button>
        </form>
      </div>
    );
  }
}

export { ChangePassword };
