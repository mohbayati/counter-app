import joi from "joi-browser";
import React from "react";
import Input from "./input";
import Select from "./select";
class Form extends React.Component {
  validate = () => {
    const option = { abortEarly: false };
    const { error } = joi.validate(this.state.data, this.schema, option);
    console.log(error);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  handleChange = ({ currentTarget: input }) => {
    const { data, errors } = { ...this.state };
    const errorMassage = this.validateProperty(input);
    if (errorMassage) errors[input.name] = errorMassage;
    else delete errors[input.name];
    data[input.name] = input.value;
    this.setState({ data });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;
    this.onSubmit();
  };
  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        value={data[name]}
        name={name}
        label={label}
        type={type}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };
  renderSelect = (name, label, opitons, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Select
        value={data[name]}
        name={name}
        label={label}
        options={opitons}
        type={type}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };
  renderButton = (lable, ...rest) => {
    return (
      <button disabled={this.validate()} {...rest} className="btn btn-primary">
        {lable}
      </button>
    );
  };
}

export default Form;
