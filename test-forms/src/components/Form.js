import React, { Component } from 'react';

import '../styles/Form.css';
import api from '../api';

export default class Form extends Component {
  state = {
    name: '',
    email: '',
    number: '',
    checked: true,
  };
  handleSubmit() {
    api.addUser(this.state.name, this.state.email, this.state.number);
  };
  render() {
    const { name, email, number, checked } = this.state;
    return (
      <form data-testid="addUserForm" onSubmit={this.handleSubmit.bind(this)}>
        <h2>Request Information</h2>
        <input data-testid="name" name="name" type="text" placeholder="Name" value={name} onChange={() => this.setState({ name: 'Pesto' })} />
        <input data-testid="email" name="email" type="email" placeholder="Email" value={email} onChange={() => this.setState({ email: 'test@gmail.com' })} />
        <input data-testid="number" name="number" type="telephone" placeholder="Number" value={number} onChange={() => this.setState({ number: '8018882321' })} />
        <div>
          <input data-testid="checked" type="checkbox" checked={checked} onClick={() => this.setState({ checked: !this.state.checked })} />
          <p data-testid="promotionsP" className="promotions">Receive Promotions</p>
        </div>
        <button type="submit" data-testid="submitButton">Submit</button>
      </form>
    );
  }
}
