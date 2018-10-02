import React, { Component } from "react";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    username: "",
    repassword: ""
  };

  handleFieldChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password, repassword, username } = this.state;

    if (password === repassword) {
      this.props.handleSignUp({
        email,
        password,
        username
      });
    } else {
      alert("Passwords don't match!");
      this.setState({
        password: "",
        username: ""
      });
    }
  };

  render() {
    return (
      <div className="mt-4">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.handleFieldChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Choose a username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              aria-describedby="username"
              placeholder="Enter Username"
              onChange={this.handleFieldChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={this.handleFieldChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="repassword"
              placeholder="Confirm Password"
              onChange={this.handleFieldChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export { SignUp };
