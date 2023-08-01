import axios from 'axios'
import React, { useState } from 'react'
// import AddStudent from './AddStudent'
import { useLocation, useNavigate } from 'react-router-dom'

const AddAccomo = () => {

  let navigate = useNavigate()
  const location = useLocation()
  const student = location.state.student
  const initialState = {student_name: student.first_name, bullet_list: ''}  
  const [accommodations, setAccommodations] = useState(initialState)

  const handleChange = (e) => {
    const { id, value } = e.target
    setAccommodations({
      ...accommodations,
      [id]: value
    })
  }

  const updateStudent = async (id) => {
    await axios.put(`http://localhost:8000/students/${student.id}`, { ...student, accomodations: id })
      .then((response) => {
        console.log(response)
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
   await axios.post('http://localhost:8000/accomodations/', accommodations)
      .then((response) => {
        console.log('Response:', response.data.id)
        updateStudent(response.data.id)
        navigate('/students')
      })
      .catch((error) => {
        console.error('Error:', error)
      })
    console.log('Accomodations:', accommodations)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3> Add list of Accommodations to the Student: </h3>
      <br/>
      <div>
        <label htmlFor="name">Student First Name:</label>
        <br/>
        <br/>
        <input id="student_name" name="name" value={accommodations.student_name} required readOnly/>
        <div>
          <br/>
        <label htmlFor="accommodations">Accommodations:</label>
        <br/>
        <br/>
        <textarea id="bullet_list" name="accommodations" value={accommodations.bullet_list} onChange={handleChange} rows="10" cols="50" required/>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}


export default AddAccomo
