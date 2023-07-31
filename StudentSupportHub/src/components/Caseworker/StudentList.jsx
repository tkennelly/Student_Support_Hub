import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const StudentList = ({allStudents, setAllStudents}) => {

    const getStudents = async() => {
        const response = await axios.get('http://localhost:8000/students/')
        setAllStudents(response.data)
      }

      useEffect(()=>{
        getStudents()
      },[])

    let navigate = useNavigate()
    const showStudent = (first_name) => {
        navigate(`${first_name}`)
    }
   
    return allStudents ? (
      <div className="student-list">
          {
              allStudents.map((student, key) => (
                  <div key={key} onClick={()=>showStudent(student.first_name)} className="student">
                      <h2>{student.first_name} {student.last_name}</h2>
                      
                  </div>
              ))
          }
      </div>
  ) : <div> Loading ... </div>
}

export default StudentList