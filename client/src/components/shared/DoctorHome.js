
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap'

    
    const Doctors = () => 
      ( <>
       <h1 styled={{color:'red'}}>All Doctors</h1>

<Container fluid="md">
  <Row>
    <Col><Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  <Card.Body>
  <Card.Title>Dr. Name
      </Card.Title>
    
    <Button styled={{textAlign:'center'}} variant="primary">Show</Button>
  </Card.Body>
</Card></Col>
    <Col><Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  <Card.Body>
  <Card.Title>Dr. Name
       </Card.Title>
    
    <Button variant="primary">Show</Button>
  </Card.Body>
</Card></Col>
    <Col><Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  <Card.Body>
  <Card.Title>Dr. Name
       </Card.Title>
    
    <Button variant="primary">Show</Button>
  </Card.Body>
</Card></Col>
    <Col><Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  <Card.Body>
    <Card.Title>Dr. Name
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
    
    
    
export default Doctors;  