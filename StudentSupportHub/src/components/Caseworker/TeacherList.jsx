import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../../App.css'


const TeacherList = ({allTeachers, setAllTeachers}) => {

    const getTeachers = async() => {
        const response = await axios.get('http://localhost:8000/users/')
        setAllTeachers(response.data)
      }

      useEffect(()=>{
        getTeachers()
      },[])

    let navigate = useNavigate()
    const showTeacher = (first_name) => {
        navigate(`${first_name}`)
    }
   
    return allTeachers ? (
      <div className="teacher-list">
        <h1> Teachers </h1>
        <br/>
          {
              allTeachers.map((teacher, key) => (
                  <div key={key} onClick={()=>showTeacher(teacher.first_name)} className="teacher">
                      <h2 className="teacher-name">{teacher.first_name} {teacher.last_name}</h2>
                      <br/>
                  </div>
              ))
          }
      </div>
  ) : <div> Loading ... </div>
}

export default TeacherList