import { useState, useEffect } from 'react';
import { axios } from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import AppointmentList from './AppointmentList';

const Appointments = () => {
  const [users, setUsers] = useState([])
  
  const { doctorId } = useParams()
  const location = useLocation()
  const { doctorFirst_name } = location.state

  useEffect( () => {
    axios.get(`/api/doctors/${doctorId}/appointments`)
      .then( res => {
        setUsers(res.data.users)
       
      })
      .catch( err => console.log(err))
  })

  return (
    <>
      <h1>All Appointments for {doctorFirst_name}</h1>
      <AppointmentList first_name='doctor' appoints={doctors} />
    </>
  )
}

export default Appointments;