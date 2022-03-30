import Appointment from './Appointment';

const AppointmentList = ({ first_name, appointment, appoint}) => (
  <>
  <h1>{first_name}</h1>
    { appointment.map( a => 
      <Appointment 
        key={a.id}
        {...a}
        appoint={appoint}
      />
    )}
  </>
)

export default AppointmentList