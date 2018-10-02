import React, { Component } from "react";

class ResetPassword extends Component {
  state = {
    email: ""
  };

  handleFieldChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email } = this.state;
    this.props.handleResetPassword(email);
  };

  render() {
    return (
      <div className="mt-4">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="newPassword">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="email"
              placeholder="Email"
              onChange={this.handleFieldChange}
            />
          </div>

          <button type="submit" className="btn btn-danger">
            Reset password
          </button>
        </form>
      </div>
    );
  }
}

export { ResetPassword };
