import React, { useEffect, useState } from "react"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header"
import Main from "./components/Main"


const App = ()=>{

  const [allStudents, setAllStudents] = useState('')
  const [allTeachers, setAllTeachers] = useState('')

  return (
     <div>
      <Header />
      <Main allStudents={allStudents} setAllStudents={setAllStudents} allTeachers={allTeachers} setAllTeachers={setAllTeachers}/>
     </div>
  )
}

export default App
