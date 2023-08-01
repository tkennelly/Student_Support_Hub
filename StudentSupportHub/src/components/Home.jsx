import Container from 'react-bootstrap/Container'
import "../App.css"



const Home = () => {
    return (
        <Container>
        <div>
            <br/>
            <h2 className='welc-case'> Welcome Caseworker! </h2>
            <br/>
            <h3> Welcome to the Student Support Hub. </h3>
            <p className="desc-p"> Welcome to Student Support Hub, the ultimate platform designed to streamline communication between caseworkers and teachers, ensuring that every student's Individualized Education Program (IEP) or 504 plan is easily understood and consistently implemented. <br/> <br/> Student Support Hub is revolutionizing the way educational accommodations are communicated, fostering stronger collaboration between caseworkers and teachers, and ultimately enhancing the learning experience for students with IEP or 504 plans. Experience the power of simplified communication. </p>
            <h3> Click on a student to see their information or add a student to the database. </h3>
         </div>
        </Container> 
    )
}

export default Home