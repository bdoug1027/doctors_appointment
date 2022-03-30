import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const AppointmentForm = ({ addAppointment, setAdd, doctorId }) => {
  const [appointment, setAppoints] = useState({ date: '', time: '', why: '', user_id: 0})
  const [unappoint, setUnappoint] = useState([])
    useEffect( () => {
      axios.get(`/api/doctors/${doctorId}/unappoint`)
      .then( res => setUnappoint(res.data))
      .catch( err => console.log(err))
    }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    addAppointment(appointment)
    setAdd(false)
    setAppoints({date: '', time: '', why: '', user_id: 0})
  }

  return (
    <>
    <h1> Create an Appointment</h1>
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
        <Form.Select 
          aria-label="Default select example"
          name='user_id'
          value={appointment.user_id}
          onChange={(e) => setAppoints({ ...appointment, user_id: e.target.value })}
        >
          <option>All Users</option>
          {unappoint.map( u =>(
            <option value={u.id}>{u.first_name} {u.last_name}</option>
          ))}
        </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Why</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            name='why'
            value={appointment.why}
            onChange={(e) => setAppoints({ ...appointment, why: e.target.value })}
            required
          />
          <Button variant="primary" type="submit">
          Submit
        </Button>
        </Form.Group>
      </Form>
    </>

  )


}
// const ConnectedEnrollmentForm = (props) => (
//   <EnrollmentConsumer>
//     { value => <EnrollmentForm {...props} {...value} />}
//   </EnrollmentConsumer>
// )

export default AppointmentForm;