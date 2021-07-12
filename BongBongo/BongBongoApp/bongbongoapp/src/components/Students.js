import React, { Component } from 'react';
import InputForm from './InputForm';
import './students.css';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      name: '',
      email: '',
      address: {
        street: '',
        city: '',
        zipcode: '',
      }
    }
  }

  componentDidMount = () => {
    this.get();
  };

  get = () => {
    fetch('http://localhost:3002/students')
    .then((res) => res.json())
    .then((response) => {
      this.setState({
        students: response,
      });
    })
  }

  refreshStudentList = (id) => {
    let students = this.state.students;
    let newStudents = students.filter(student => student._id !== id)
    this.setState({
      students: newStudents
    })
  }

  delete = (id) => {
    fetch('http://localhost:3002/students/' + id, {
      method: 'DELETE',
      headers: {'Content-Type':'application/json'},
    }).then(() => {
      this.refreshStudentList(id);
    })
  }
  
  render() {
    const { students } = this.state;
    return (
      <>
      <div className="studentlist-container">
        <InputForm get={this.get} /> 
        <p className="headline2">List of students</p>
          <ul>
            {students.map((student, i) =>             
            <li key={i}>
              <p className="name1"> {student.name}</p>
              <p className="name"> {student.email}</p>
              <p className="name"> {student.address && student.address.street}</p>
              <p className="name"> {student.address && student.address.zipcode}</p>
              <p className="name"> {student.address && student.address.city}</p>
              <p><button type="button" className="btn-dark" onClick={() => this.delete(student._id)}> Delete </button></p>
            </li>
            )} 
          </ul>
        </div>
      </>
    )
  }
} 
export default Students;
