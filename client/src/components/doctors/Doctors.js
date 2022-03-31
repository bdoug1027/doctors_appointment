import { Button } from 'react-bootstrap';
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
          <Button onClick={() => setAdd(false)}>Cancel</Button>
        </>
        :
        <Button onClick={() => setAdd(true)}>+</Button>
      }
      <h1>Doctors</h1>
      <DoctorList
      />
    </>
  )
}

export default Doctors;