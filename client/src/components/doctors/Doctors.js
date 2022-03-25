import axios from 'axios';
import { useState, useEffect } from 'react';
import DoctorList from './DoctorList';
import DoctorForm from './DoctorForm';

const Doctors = () => {
  const [doctors, setDoctors] = useState([])
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    axios.get('/api/doctors')
      .then( res => setDoctors(res.data) )
      .catch( err => console.log(err))
  }, [])

  const addDoctor = (doctor) => {
    axios.post('/api/doctors', { doctor })
      .then( res => setDoctors([...doctors, res.data]))
      .catch( err => console.log(err))
  }

  return (
    <>
      {
        adding ?
        <>  
          <DoctorForm 
            addDoctor={addDoctor}
            setAdd={setAdd}
          />
          <button onClick={() => setAdd(false)}>Cancel</button>
        </>
        :
        <button onClick={() => setAdd(true)}>+</button>
      }
      <h1>Doctors</h1>
      <DoctorList
        doctors={doctors}
      />
    </>
  )
}

export default Doctors;