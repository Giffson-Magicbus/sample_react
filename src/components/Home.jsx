import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
const Home = () => {

    const navigate = useNavigate()
    const handleNavigation = ()=>{
        navigate('/contact');
    }
    const apiUrl = import.meta.env.VITE_API_URL;
  return (
    <div><h1>Home</h1>
    
    <p>hyperlink</p>
    {/* <Link to={'/services/design'}>Get</Link> */}
    <button onClick={()=>handleNavigation()}>services navigation</button>
    {apiUrl}
    </div>
  )
}

export default Home