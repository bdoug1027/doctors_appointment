import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserShow = () => {
  const [user, setUser] = useState({ first_name: '', last_name: '', phone: '', note: ''})

  const { userId } = useParams()

  useEffect( () => {
    axios.get(`/api/users/${userId}`)
      .then( res => setUser(res.data ))
      .catch( err => console.log(err) )
  }, [])

  const { first_name, last_name, phone, note } = user
  return(
    <>
      <h1>{first_name} {last_name} {phone} {note}</h1>
      <button>Edit</button>
      <button>Delete</button>
    </>
  )
}

export default UserShow;