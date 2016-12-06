import React, {PropTypes} from 'react';
import {Input} from 'react-toolbox/lib/input';

class Form extends React.Component {
  state = { name: '', phone: '', email: '', hint: '' };

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  render () {
    return (
      <section>
        <Input type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={16 } />
        <Input type='email' label='Email address' icon='email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />
      </section>
    );
  }
}

export default Form;