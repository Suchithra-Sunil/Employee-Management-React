import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';



function Home() {

  const [employees,setEmployees]=useState([])

  //api call
  const fetchEmployees = async ()=>{
    const result=await axios.get('http://localhost:8000/getEmployees')
    setEmployees(result.data.message);
  }

  //api -delete
  const deleteEmployee=async (id)=>{
    const result=await axios.delete('http://localhost:8000/deleteEmployee/'+id)
    alert(result.data.message)
    fetchEmployees()
  }

  console.log(employees);

  useEffect(() => {
    fetchEmployees()
  }, [])

  return (
    <div className='container mt-3'>
      <Row>
        <Col lg={4} className='ms-3 mt-4'>
          <div className='w-100 container bg-primary text-light'>
            <h2 className='text-center'>Employee Management System</h2>
            <p className='text-center'>The ultimate solution for managing your team's productivity and success</p>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dicta voluptates nostrum praesentium quos voluptatibus dolores.
              Dolor distinctio odio ratione ab rem minus necessitatibus, cumque cum accusantium eaque molestiae
              doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quaerat impedit, ullam tempore vero voluptatibus obcaecati nihil eius,
              voluptatum quo sunt libero nesciunt dignissimos harum perspiciatis rem quibusdam hic eligendi.</p>
            <Link to={'/add'}>
              <Button variant="secondary" className='' style={{marginLeft:'120px'}} size="sm">
                Add New Employee
              </Button>
            </Link>
          </div>
        </Col>
        <Col className='mb-5 ' >
          <Image className='w-100' src="https://i.postimg.cc/kMyTfsLG/employeemngt.png" roundedCircle />
        </Col>

      </Row>
      <div className='mt-5 w-100 text-center'>
        <h1 className='text-center text-warning'>List Of Employees</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr className='text-info'>
              <th>#</th>
              <th>ID</th>
              <th>Full Name</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Experience</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
           {
              employees?.map((employee, index) => (
                <tr>
                <td>{index}</td>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
                <td>{employee.salary}</td>
                <td>{employee.experience}</td>
                <td>
                  <Link to={`edit/${employee.id}`}>
                    <Button variant="secondary" size="sm" className=''>
                      <i class="fa-regular fa-pen-to-square"></i> Edit
                    </Button>
                  </Link>
                  <Link to={`view/${employee.id}`}>
                    <Button variant="secondary" className='ms-4' size="sm">
                    <i class="fa-thin fa-street-view"></i> View
                    </Button>
                  </Link>
                  <Button onClick={()=>deleteEmployee(employee.id)} variant="secondary" className='ms-4' size="sm">
                    <i class="fa-solid fa-trash"></i> Delete
                  </Button>
                </td>
              </tr>
              ))
           }
         
         </tbody>
        </Table>
      </div>
      <div style={{height:'100px'}}>
      </div>
    </div>
  )
}

export default Home