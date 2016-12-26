import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Input} from 'react-toolbox/lib/input';
import {Dropdown} from 'react-toolbox/lib/dropdown';
import { Link }       from 'react-router';

class Form extends React.Component {
  
  state = { name: '', company: '', multiline: '', email: '', hint: '', label: '' };

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  render() {
    return (
      <section>
        <Input type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={16} />
        <Input type='email' label='Email address' icon='email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />
        <Input type='tel' label='Company' name='company' icon='company' value={this.state.company} onChange={this.handleChange.bind(this, 'company')} />
        <p>or e-mail us at <Link to={'mailto:hi@academybydesign.com'}><strong>hi@academybydesign.com</strong></Link></p>
        <Link className="btn" type="submit" to={'/DesignDevelopment'}>Submit</Link>
      </section>
    );
  }
};

export default Form;

  