import { Link } from 'react-router-dom'
import Nav from './Nav'


const Header = ()=>{

    return (
      <div className="header">
        <Link to='/home'>Home</Link>
        <Nav />
      </div>
    )
  }
  
  export default Header