import React, { Component } from "react";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleFieldChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    this.props.handleSignIn({
      email,
      password
    });
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
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
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

export { SignIn };
