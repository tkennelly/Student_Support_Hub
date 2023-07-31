import { Link } from 'react-router-dom'

const Nav = ()=>{

    return (
        <nav>
            <Link to='/addstudent'>Add Student | </Link>
            <Link to='/students'>Students | </Link>
            <Link to='/teachers'>Teachers</Link>
        </nav>
    )
  }
  
  export default Nav