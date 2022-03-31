import {useState, useEffect} from 'react';
import {useParams, useLocation } from 'react-router-dom';
import AppointmentList from './AppointmentList';
import AppointmentForm from './AppointmentForm';
import {Button} from 'react-bootstrap'
import { AppointmentConsumer } from '../../providers/AppointmentProvider';
const Appointments = ({ appoint, appointments, getAllAppointments, getAppointUsers }) => {
  
  const [adding, setAdd] = useState(false)

  const {doctorId} = useParams()


  const location = useLocation()
  const {doctorFirst_name} = location.state
  
  useEffect( () =>{
    getAllAppointments(doctorId)
    getAppointUsers(doctorId)
  }, [])
  return (
    <>
    { adding ? 
       <>
        <AppointmentForm
       
          setAdd={setAdd}
          doctorId={doctorId}
        />
          <Button onClick={() => setAdd(false)}>Cancel</Button>
        </>
        :
        <Button onClick={() => setAdd(true)}>+</Button>
      }
      <h1>All Appointments for Doctor: {doctorFirst_name}</h1>
      <AppointmentList
      appoint={appoint}
      appointments={appointments}
      />
    </>
  )
}
const ConnectedAppointments = (props) => (
  <AppointmentConsumer>
    { value => <Appointments {...props} {...value} />}
  </AppointmentConsumer>
)

export default ConnectedAppointments;