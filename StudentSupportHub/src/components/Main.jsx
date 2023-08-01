import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Stack from 'react-bootstrap/Stack'
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentList from "./Caseworker/StudentList"
import EditStudent from "./Caseworker/EditStudent"
import AddStudent from "./Caseworker/AddStudent"
import AddAccomo from "./Caseworker/AddAccomo"
import TeacherList from "./Caseworker/TeacherList"
import TeacherCard from "./Caseworker/TeacherCard"

const Main = ({ allStudents={allStudents}, setAllStudents={setAllStudents}, allTeachers={allTeachers}, setAllTeachers={setAllTeachers}})=>{

    return (
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/students' element={<StudentList allStudents={allStudents} setAllStudents={setAllStudents}/>}/>
        <Route path='/students/:first_name' element={<EditStudent allStudents={allStudents} setAllStudents={setAllStudents}/>}/>
        <Route path='/addstudent' element={<AddStudent />}/>
        <Route path='/addaccommo' element={<AddAccomo />}/>
        <Route path='/teachers' element={<TeacherList allTeachers={allTeachers} setAllTeachers={setAllTeachers}/>}/>
        <Route path='/teachers/:first_name' element={<TeacherCard allTeachers={allTeachers} setAllTeachers={setAllTeachers}/>}/>
      </Routes>
    )
  }
  
  export default Main