import axios from 'axios';
import { useState, useEffect } from 'react';
import DoctorList from './DoctorList';
import DoctorForm from './DoctorForm';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap'

const Doctors = () => {
  const [doctors, setDoctors] = useState([])
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    axios.get('/api/doctors')
      .then( res => setDoctors(res.data) )
      .catch( err => console.log(err))
  }, [])

  const addDoctor = (doctor) => {
    axios.post('/api/doctors', { doctor })
      .then( res => setDoctors([...doctors, res.data]))
      .catch( err => console.log(err))
  }

  return (
    <>
      {
        adding ?
        <>  
          <DoctorForm 
            addDoctor={addDoctor}
            setAdd={setAdd}
          />
          <button onClick={() => setAdd(false)}>Cancel</button>
        </>
        :
        
        <Button onClick={() => setAdd(true)} style={{color:'#64fcd9', marginLeft:'70rem', marginTop:'30px', backgroundColor:'white', border:'none'}}>
          +
        </Button>
      }
      <h1 style={{color:'#ffb61d', marginLeft:'80px', marginBottom:'30px'}}> All Doctors</h1>
    
         <>
   

<Container  fluid="md">
  <Row >
    <Col><Card style={{ width: '10rem',textAlign:'center'}}>
  <Card.Img variant="top" src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  <Card.Body>
  <Card.Title>
     Dr. Name
  </Card.Title>
    
    <Button styled={{textAlign:'center'}} variant="primary">Show</Button>
  </Card.Body>
</Card></Col>
    <Col><Card style={{ width: '10rem',textAlign:'center' }}>
  <Card.Img variant="top" src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  <Card.Body>
  <Card.Title>
    Dr. Name
  </Card.Title>
    
    <Button variant="primary">Show</Button>
  </Card.Body>
</Card></Col>
    <Col><Card style={{ width: '10rem',textAlign:'center' }}>
  <Card.Img variant="top" src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  <Card.Body>
  <Card.Title>
    Dr. Name
   </Card.Title>
    
    <Button variant="primary">Show</Button>
  </Card.Body>
</Card></Col>
    <Col><Card style={{ width: '10rem',textAlign:'center' }}>
  <Card.Img variant="top" src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  <Card.Body>
    <Card.Title>
      Dr. Name
    </Card.Title>
    
    <Button variant="primary">Show</Button>
  </Card.Body>
</Card></Col>
  </Row>
</Container>
<br />
<br />
<br />
  
        </>
      )
    

      
      <DoctorList
      
        doctors={doctors}
      />
      
    </>
  )
}

export default Doctors;