import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function View() {

  const [employee, setEmployee] = useState([])

  const params = useParams()
  //console.log(params.id);

  //api 
  const fetchEmp = async () => {
    const result = await axios.get('http://localhost:8000/getEmployee/' + params.id)
    setEmployee(result.data.message);
  }
  console.log(employee);

  useEffect(() => {
    fetchEmp()
  }, [])

  return (
    <div >
      <Row>
        <div className='text-center'>
          <Image style={{ width: '180px' }} src="https://i.postimg.cc/hvLwnyHQ/profileimage.png" rounded />
        </div>
        <div className='text-center'>
         <Card className='w-25 text-center' style={{marginLeft:'580px'}}>
            <Card.Body>
              <Card.Title>Employee Name : {employee.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Designation : {employee.designation}</ListGroup.Item>
              <ListGroup.Item>Salary : {employee.salary}</ListGroup.Item>
              <ListGroup.Item>Experience  : {employee.experience}</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </Row>

    </div>
  )
}

export default View