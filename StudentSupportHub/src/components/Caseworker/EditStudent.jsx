import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import NameModal from '../Modals/NameModal'

const EditStudent = ({ allStudents }) => {

  const [student, setStudent] = useState({})
  const [accomodation, setAccomodation] = useState()
  const [editNameModal, setEditNameModal] = useState(false)

//   const getAccomo = async() => {
//     let selectedStudent = allStudents.find(student => student.first_name === first_name)
//     const response = await axios.get(`${selectedStudent.accomodations}`)
//     setAccomodation(response.data)
//   }
// somehow make it so it grabs student.accomodations specifically and not just all of them. what is there MIGHT work
//   useEffect(()=>{
//     getAccomo()
//   },[])

  let { first_name } = useParams()
  console.log(first_name)

  const handleOpenNameModal = () => {
    setEditNameModal(true)
  }

  const handleCloseNameModal = () => {
    setEditNameModal(false)
  }

  const handleNewName = async (newName) => {
    let selectedStudent = allStudents.find(student => student.first_name === first_name)
    // console.log(selectedStudent)
    const res = await axios.put(`http://localhost:8000/students/${selectedStudent.id}`, { ...selectedStudent, first_name: newName })
    console.log(newName)
    console.log(res.data)
  }

const deleteStudent = async () => {
    let selectedStudent = allStudents.find(student => student.first_name === first_name)
    console.log(selectedStudent)
    await axios.delete(`http://localhost:8000/students/${selectedStudent.id}`)
    window.location.reload()
    // change to navigate maybe
}

  
  console.log(allStudents)



  useEffect(() => {
          let selectedStudent = allStudents.find(student => student.first_name === first_name)
          console.log(selectedStudent)
          setStudent(selectedStudent)
          console.log(student)
      }, [allStudents, first_name])
console.log(student)

  return student ? (
      <div className='student-page'>
          <div className='student-details'>
              <h2>Name: {student.first_name} {student.last_name}</h2> <button onClick={handleOpenNameModal}>Edit Name</button>
              <h3>Learning Plan: {student.learning_plan}</h3> 
              <p>Accommodations: {student.accomodations}</p> 
              <button onClick={deleteStudent}> Delete Student </button>
              <NameModal
                isOpen={editNameModal}
                onCancel={handleCloseNameModal}
                onConfirm={handleNewName}
            />
              {/* <h3>Assigned Teachers: {student.teachers}</h3> <button>Edit</button>
              <h3>Caseworker: {student.caseworker}</h3> <button>Edit</button> */}
          </div>
      </div>
  ) : <div> Loading ... </div>
}


export default EditStudent