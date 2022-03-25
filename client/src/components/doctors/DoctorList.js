import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const DoctorList = ({ doctors }) => (
  <>
    <Container>
      <Row>
        { doctors.map( d => 
          <Col xs={6} md={3}>
            <Card style={{ width: '14rem' }}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1537861295351-76bb831ece99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80" alt="doctor" />
              <Card.Body>
                <Card.Title>{d.first_name}</Card.Title>
                <Card.Text>
                  {d.last_name}
                </Card.Text>
                <Card.Text>
                  {d.specialty}
                </Card.Text>
                <Card.Text>
                  {d.bio}
                </Card.Text>
                <Link to={`/doctors/${d.id}`}>
                  <Button variant="primary">Show</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  </>
)

export default DoctorList;