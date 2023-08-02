import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const TeacherCard = ({ allTeachers }) => {

  const [teacher, setTeacher] = useState({})
  
  console.log(allTeachers)

  let { first_name } = useParams()

  useEffect(() => {
          let selectedTeacher = allTeachers.find(teacher => teacher.first_name === first_name)
          console.log(selectedTeacher)
          setTeacher(selectedTeacher)
          console.log(teacher)
      }, [allTeachers, first_name])
console.log(teacher)

  return teacher ? (
      <div className='teacher-page'>
          <div className='teacher-details'>
            <br/>
              <h2>{teacher.first_name} {teacher.last_name}</h2>  
            <br/>
              <h3>Email: {teacher.email}</h3> 
          </div>
      </div>
  ) : <div> Loading ... </div>
}


export default TeacherCard