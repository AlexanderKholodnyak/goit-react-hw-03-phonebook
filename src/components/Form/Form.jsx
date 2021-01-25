import React, { Component } from 'react';
//import shortid from 'shortid';
import s from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
    //id: ''
  };
  handleChange = event => {
    const { name, value } = event.currentTarget;
    console.log({ name, value });
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
    //   this.props.onSubmit(this.name, this.number);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder=""
            onChange={this.handleChange}
            className={s.input}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            placeholder=""
            onChange={this.handleChange}
            className={s.input}
          />
        </label>

        {
          <button type="submit" className={s.button}>
            Add contact
          </button>
        }
      </form>
    );
  }
}

export default Form;
