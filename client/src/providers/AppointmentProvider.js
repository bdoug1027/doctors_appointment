import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AppointmentContext = React.createContext()

export const AppointmentConsumer = AppointmentContext.Consumer

const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([])
  const [appoint, setAppoint] = useState([])
  const navigate = useNavigate()

  const getAllAppointments = (doctorId) => {
    axios.get(`/api/doctors/${doctorId}/appointments`)
    .then( res => setAppointments(res.data))
    .catch( err => console.log(err) )
  }

  const getAppointUsers = (doctorId) => {
    axios.get(`/api/doctors/${doctorId}/appoint`)
    .then( res => setAppoint( res.data))
    .catch( err => console.log(err) )
  }

  const addAppointment = (doctorId, appointment, id) => {
    axios.post(`/api/doctors/${doctorId}/appointments`, { appointment })
      .then(res => {
        setAppointments([...appointments, res.data])
        navigate('/doctors')
      })
      .catch( err => console.log(err) )
  }

  const updateAppointment = (doctorId, id, appointment) => {
    axios.put(`/api/doctors/${doctorId}/appointments/${id}`, { appointment })
      .then( res => {
        const newUpdatedAppointments = appointment.map( a => {
          if (a.id === id) {
            return res.data
          }
          return a
        })
        setAppointments(newUpdatedAppointments)
        navigate(`/${doctorId}/appointments`)
      })
      .catch( err => console.log(err) )
  }

  
  const deleteAppointment = (doctorId, id) => {
    axios.delete(`/api/doctors/${doctorId}/appointments/${id}`)
      .then( res => {
        setAppointments(appointments.filter( a => a.id !== id))
        navigate(`/${doctorId}/appointments`)
      })
      .catch( err => console.log(err) )
  }

  return (
    <AppointmentContext.Provider value={{
      appoint,
      appointments,
      getAllAppointments: getAllAppointments,
      getAppointUsers: getAppointUsers,
      addAppointment: addAppointment,
      updateAppointment: updateAppointment,
      deleteAppointment: deleteAppointment,
    }}>
      { children }
    </AppointmentContext.Provider>
  )
}

export default AppointmentProvider;