
import { useState} from 'react';
import DoctorList from './DoctorList';
import DoctorForm from './DoctorForm';

const Doctors = () => {
 
  const [adding, setAdd] = useState(false)

  return (
    <>
      {
        adding ?
        <>  
          <DoctorForm 
            setAdd={setAdd}
          />
          <button onClick={() => setAdd(false)}>Cancel</button>
        </>
        :
        <button onClick={() => setAdd(true)}>+</button>
      }
      <h1>Doctors</h1>
      <DoctorList
      />
    </>
  )
}

export default Doctors;