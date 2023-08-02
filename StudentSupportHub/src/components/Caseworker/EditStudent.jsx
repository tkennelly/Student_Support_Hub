import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import NameModal from '../Modals/NameModal'
import '../../App.css'

const EditStudent = ({ allStudents }) => {

  let navigate = useNavigate()
  const [student, setStudent] = useState({})
  const [accomodation, setAccomodation] = useState()
  const [editNameModal, setEditNameModal] = useState(false)

  const getAccomo = async() => {
    let selectedStudent = allStudents.find(student => student.first_name === first_name)
    const response = await axios.get(`${selectedStudent.accomodations}`)
    setAccomodation(response.data)
    return response
  }
  useEffect(()=>{
    getAccomo()
  },[])

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
    navigate('/students')
  }

  const deleteStudent = async () => {
      let selectedStudent = allStudents.find(student => student.first_name === first_name)
      console.log(selectedStudent)
      await axios.delete(`http://localhost:8000/students/${selectedStudent.id}`)
      let navigate = useNavigate()
      navigate('/students')
  }

  
  console.log(allStudents)

  // loop on "|"

  // let accomList = accomodation.bullet_list.split("|")

  // console.log(accomodation.bullet_list)

  let accomBulletList = (x) => {
    console.log("penis poopness")
    console.log(x)
    let accomList = x.bullet_list.split("|")
    let bulletList = ""

    for(let i=0;i<accomList.length;i++) {
      bulletList += `<li> ${accomList[i]} </li>`
    }

    return bulletList
  } 



  useEffect(() => {
          let selectedStudent = allStudents.find(student => student.first_name === first_name)
          console.log(selectedStudent)
          setStudent(selectedStudent)
          console.log(student)
      }, [allStudents, first_name])
console.log(student)

  return student && accomodation ? (
      <div className='student-page'>
          <div className='student-details'>
            <div className="name-and-button">
              <h2>{student.first_name} {student.last_name}</h2> <button onClick={handleOpenNameModal}>Edit Name</button>
            </div>
              <h3>Learning Plan: {student.learning_plan}</h3> 
              <p>Accommodations:</p> <ul className="accommodations" dangerouslySetInnerHTML={{__html: accomBulletList(accomodation)}}></ul> 
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