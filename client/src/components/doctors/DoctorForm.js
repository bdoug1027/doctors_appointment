import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const DoctorForm = ({ addDoctor, setAdd }) => {
  const [doctor, setDoctor] = useState({ first_name: '', last_name: '', specialty: '', bio: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addDoctor(doctor)
    setAdd(false)
    setDoctor({ first_name: '', last_name: '', specialty: '', bio: '' })
  }

  return (
    <>
      <h1>Create Doctor</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            name='first name'
            value={doctor.first_name}
            onChange={(e) => setDoctor({ ...doctor, first_name: e.target.value })}
            type="text" 
            placeholder="first name" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control  
            name='desc'
            value={doctor.last_name}
            onChange={(e) => setDoctor({ ...doctor, last_name: e.target.value })}
            placeholder="last name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Select 
          aria-label="Default select example"
          name='specialty'
          value={doctor.specialty}
          onChange={(e) => setDoctor({ ...doctor, specialty: e.target.value })}
        >
          <option>All Specialties</option>
          <option value="Family Doctor">Family Doctor</option>
          <option value="Surgeon">Sergion</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="OBGYN">OBGYN</option>
        </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Form.Group className="mb-3">
          <Form.Label>Bio</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            name='bio'
            value={doctor.bio}
            onChange={(e) => setDoctor({ ...doctor, bio: e.target.value })}
            required
          />
        </Form.Group>
      </Form>
    </>
  )
}

export default DoctorForm;