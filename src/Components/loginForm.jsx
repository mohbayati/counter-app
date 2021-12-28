import React from "react";
import joi from "joi-browser";
import Form from "./common/form";
class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };
  schema = {
    username: joi.string().required().label("Username"),
    password: joi.string().required().label("Password"),
  };

  onSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <div>
        <h1>login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
