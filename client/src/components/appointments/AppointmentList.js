import Appointment from './Appointment';
import { AppointmentConsumer } from '../../providers/AppointmentProvider';
const AppointmentList = ({ first_name, appoint}) => (
  <AppointmentConsumer>
    { value => (
  <>
  <h1>{first_name}</h1>
    { value.appointments.map( a => 
      <Appointment 
        key={a.id}
        {...a}
        appoint={appoint}
      />
    )}
  </>
  )}
  </AppointmentConsumer>
)

export default AppointmentList


