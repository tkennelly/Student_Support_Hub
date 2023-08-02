import axios from "axios"
import React, { useState, } from 'react'
import { useNavigate } from "react-router-dom"


const AddStudent = ()=>{

  const initialState = {first_name: '', last_name: '', learning_plan: ''}
  const [formData, setFormData] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
   await axios.post('http://localhost:8000/students/', formData)
      .then((response) => {
        console.log('Response:', response.data)
        navigate('/addaccommo', {state: { student: response.data}})
      })
      .catch((error) => {
        console.error('Error:', error)
      })
    console.log('Form Data:', formData)
    
  }


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3 className="please">Please enter the First and Last name of the Student, as well as their Learning Plan type.</h3>
        <br/>
        <label htmlFor="first_name">First Name:</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
      </div>
      <br/>
      <div>
        <label htmlFor="last_name">Last Name:</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
      </div>
      <br/>
      <div className="lp-dropdown">
        <label htmlFor="learning_plan">Learning Plan:</label>
        <select
          id="learning_plan"
          name="learning_plan"
          value={formData.learning_plan}
          onChange={handleChange}
          required
        >
          <option value="">Select a Learning Plan</option>
          <option value="IEP">IEP</option>
          <option value="504">504</option>
        </select>
      </div>
      <br/>
      <button type="submit">Submit</button>
    </form>
  )
}
  
export default AddStudent