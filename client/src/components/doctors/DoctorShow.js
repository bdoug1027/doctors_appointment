import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DoctorShow = () => {
  const [doctor, setDoctor] = useState({ first_name: '', last_name: '', specialty: '', bio: '' })

  const { doctorId } = useParams() 

  useEffect( () => {
    axios.get(`/api/doctors/${doctorId}`)
      .then( res => setDoctor(res.data))
      .catch( err => console.log(err))
  }, [])

  const { first_name, last_name, specialty, bio } = doctor
  return(
    <>
      <h1>{first_name}</h1>
      <h3>{last_name}</h3>
      <h3>{specialty}</h3>
      <h3>{bio}</h3>
      <button>Edit</button>
      <button>Appointment</button>
      <button>Delete</button>
      <Link 
        to={`/${doctor.id}/appointments`}
        state={{ doctorFirst_name: first_name }}
      >
        <Button>Appointment</Button>
      </Link>
      <Button>Delete</Button>
    </>

  )
}

export default DoctorShow;