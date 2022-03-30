import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useLocation } from 'react-router-dom';
import AppointmentList from './AppointmentList';
import AppointmentForm from './AppointmentForm';
import {Button} from 'react-bootstrap'
const Appointments = () => {
  const [appointments, setAppoinments] = useState([])
  const [appoint, setAppoint] = useState([])
  const [adding, setAdd] = useState(false)

  const {doctorId} = useParams()


  const location =useLocation()
  const {doctorFirst_name} = location.state
  
  useEffect( () => {
    axios.get(`/api/doctors/${doctorId}/appointments`)
    .then( res => setAppoinments(res.data) )
    .catch( err => console.log(err) )
  }, [])

  useEffect( () => {
    axios.get(`/api/doctors/${doctorId}/appoint`)
    .then( res => setAppoint( res.data))
    .catch( err => console.log(err))
  }, [])

  const addAppointment = (appointment) => {
    axios.post(`/api/doctors/${doctorId}/appointments`, { appointment })
    .then( res => {
      setAppoinments([...appointments, res.data])
      window.location.href = `/${doctorId}/appointments`
    })
    .catch( err => console.log(err) )
  }
  return (
    <>
    { adding ? 
       <>
        <AppointmentForm
          addAppointment={addAppointment}
          setAdd={setAdd}
          doctorId={doctorId}
        />
          <Button onClick={() => setAdd(false)}>Cancel</Button>
        </>
        :
        <Button onClick={() => setAdd(true)}>+</Button>
      }
      <h1>All Appointments for {doctorFirst_name}</h1>
      <AppointmentList
      appointment={appointments}
      appoint={appoint}
      />
    </>
  )
}
// const ConnectedEnrollments = (props) => (
//   <EnrollmentConsumer>
//     { value => <Enrollments {...props} {...value} />}
//   </EnrollmentConsumer>
// )

export default Appointments;