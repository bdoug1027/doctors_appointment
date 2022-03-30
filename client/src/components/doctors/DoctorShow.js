import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, ListGroup } from 'react-bootstrap';
import { DoctorConsumer } from '../../providers/DoctorProvider';
import DoctorForm from './DoctorForm'

const DoctorShow = ({ deleteDoctor }) => {
  const [doctor, setDoctor] = useState({ first_name: '', last_name: '', specialty: '', bio: '' })
  const [appointedUsers, setAppointedUsers] = useState([])
  const { doctorId } = useParams() 
  const [editing, setEdit] = useState(false)


  useEffect( () => {
    axios.get(`/api/doctors/${doctorId}`)
      .then( res => setDoctor(res.data))
      .catch( err => console.log(err))
  }, [])

  useEffect( () => {
    axios.get(`/api/${doctorId}/users`)
    .then( res => setAppointedUsers(res.data))
    .catch( err => console.log(err))
  }, [])

  
  const { first_name, last_name, specialty, bio } = doctor
  return(
    <>
      <h1>{first_name}</h1>
      <h3>{last_name}</h3>
      <h3>{specialty}</h3>
      <h3>{bio}</h3>
      { editing ?
        <>
          <DoctorForm
          {...doctor}
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
      <Button onClick={() => deleteDoctor(doctor.id)}>
        Delete
        </Button>
      <Link 
        to={`/${doctor.id}/appointments`}
        state={{ doctorFirst_name: first_name }}
      >
        <Button>Appointment</Button>
        </Link>
        <h3>All Users with appointments with {first_name}</h3>
      <ListGroup>
        { appointedUsers.map( u => 
          <Link to={`/users/${u.id}`}>
            <ListGroup.Item>
              {u.first_name} {u.last_name}
            </ListGroup.Item>
          </Link>
        )}
      </ListGroup>
    </>

  )
}

const ConnectedDoctorShow = (props) => (
  <DoctorConsumer>
    { value => <DoctorShow {...props} {...value} /> }
  </DoctorConsumer>
)
export default ConnectedDoctorShow;