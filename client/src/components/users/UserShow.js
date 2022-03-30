import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { UserConsumer } from '../../providers/UserProvider';
import UserForm  from './UserForm'
const UserShow = ({ deleteUser }) => {
  const [user, setUser] = useState({ first_name: '', last_name: '', phone: '', note: ''})
  const [doctors, setDoctors] = useState ([])
  const { userId } = useParams()
  const[editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/users/${userId}`)
      .then( res => setUser(res.data ))
      .catch( err => console.log(err) )
  }, [])

  useEffect( () => {
    axios.get(`/api/${userId}/doctors`)
      .then( res => setDoctors(res.data ))
      .catch( err => console.log(err) )
  }, [])

  const { first_name, last_name, phone, note } = user
  return(
    <>
      <h1>{first_name} {last_name} {phone} {note}</h1>
      {editing ? 
        <>
         <UserForm
        {...user}
        setEdit={setEdit}
        />
         <Button onClick={() => setEdit(false)}>
          Cancel
          </Button>
      </>
      :
      <Button onClick={() => setEdit(true)}>
        Edit
      </Button>
      }
      <Button onClick={() => deleteUser(user.id)}>
        Delete
      </Button>

      <h4>Doctor Assigned</h4>
      { doctors.map( d => 
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{d.first_name} {d.last_name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{d.specialty}</Card.Subtitle>
            <Card.Text>{d.bio}</Card.Text>
            <Link to={`/doctors/${d.id}`}>Show
            </Link>
          </Card.Body>
        </Card>
        )}
    </>
  )
}

const ConnectedUserShow = (props) => (
  <UserConsumer>
    { value => <UserShow {...props} {...value} />}
  </UserConsumer>

)

export default ConnectedUserShow;