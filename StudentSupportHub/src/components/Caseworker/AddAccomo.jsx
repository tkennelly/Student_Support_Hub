import axios from 'axios'
import React, { useState, useNavigate } from 'react'
// import AddStudent from './AddStudent'

const AddAccomo = () => {

  const initialState = {student_name: '', bullet_list: ''}  
  const [accommodations, setAccommodations] = useState(initialState)

  const handleChange = (e) => {
    const { id, value } = e.target
    setAccommodations({
      ...accommodations,
      [id]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
   await axios.post('http://localhost:8000/accomodations/', accommodations)
      .then((response) => {
        console.log('Response:', response.data)
        let navigate = useNavigate()
        navigate('/students')
      })
      .catch((error) => {
        console.error('Error:', error)
      })
    console.log('Accomodations:', accommodations)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Student First Name:</label>
        <input id="student_name" name="name" value={accommodations.student_name} onChange={handleChange} required/>
        <label htmlFor="accommodations">Accommodations:</label>
        <textarea id="bullet_list" name="accommodations" value={accommodations.bullet_list} onChange={handleChange} rows="4" cols="50" required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}


export default AddAccomo
