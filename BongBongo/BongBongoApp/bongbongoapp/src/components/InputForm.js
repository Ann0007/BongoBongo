import React, { Component } from 'react';
import './inputform.css';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      street: '',
      zipcode: '',
      city: '',
    }
  }

  handleInputName = (e) => {
    this.setState({name: e.target.value});
    e.preventDefault();
    
  };

  handleInputEmail = (e) => {
    this.setState({email: e.target.value});
    e.preventDefault();
  };

  handleInputStreet = (e) => {
    this.setState({street: e.target.value});
    e.preventDefault();
  };

  handleInputZipcode = (e) => {
    this.setState({zipcode: e.target.value});
    e.preventDefault();
  };

  handleInputCity = (e) => {
    this.setState({city: e.target.value});
    e.preventDefault();
  };

  createStudent = (e) => {
    e.preventDefault();
    e.target.reset(); 
    const student = {
      email: this.state.email,
      name: this.state.name,
        address: {
          street: this.state.street,
          city: this.state.city,
          zipcode: this.state.zipcode,
        }
         
    }

    fetch('http://localhost:3002/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(student)
    })

    .then(res=>res.json())
      .then(() => {
        this.props.get(student);
        this.setState({
          name: '',
          email: '',
          street: '',
          city: '',
          zipcode: '',
        })
      })
  }

  render() {
    return (
      <>
      <div className="wrapper">
        <form
          onSubmit={(e) => this.createStudent(e)}>
          <p className="headline">students</p>
          <div className="form-group">
            <label>Name:</label>
            <input onChange={e => { this.handleInputName(e) }}
              required type="text"
              className="form-control"
              id="name" placeholder="Name..." />
          </div>

          <div className="form-group">
            <label>Email address: </label>
            <input onChange={e => { this.handleInputEmail(e) }}
              required type="email"
              className="form-control"
              id="email" placeholder="Email address..." />
          </div>

          <div className="form-group">
            <label>Street:</label>
            <input onChange={e => { this.handleInputStreet(e) }}
              required type="text"
              className="form-control"
              id="adressStreet"
              placeholder="Street..." />
          </div>

          <div className="form-group">
            <label>Zipcode:</label>
            <input onChange={e => { this.handleInputZipcode(e) }}
              required type="text"
              className="form-control"
              id="zipcode"
              placeholder="Zipcode..." />
          </div>

          <div className="form-group">
            <label>City:</label>
            <input onChange={e => { this.handleInputCity(e) }}
              required type="text"
              className="form-control"
              id="city"
              placeholder="City..." />
          </div>

          <button type="submit" className="btn-sub" >Add new student</button>
        </form>
      </div>
      </>
      )
    }
}
export default InputForm;
