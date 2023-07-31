import axios from 'axios'
import React, { useState } from 'react'

const AddAccomo = () => {

  const initialState = {student_name: '', bullet_list: ''}  
  const [accommodations, setAccommodations] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setAccommodations({
      ...accommodations,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // axios call
    console.log('Accommodations:', accommodations)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Student First Name:</label>
        <input id="name" name="name" value={accommodations.student_name} onChange={handleChange} required/>
        <label htmlFor="accommodations">Accommodations:</label>
        <textarea id="accommodations" name="accommodations" value={accommodations.bullet_list} onChange={handleChange} rows="4" cols="50" required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddAccomo
