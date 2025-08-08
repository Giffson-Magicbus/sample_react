import {Link} from 'react-router-dom'
const Header = ()=>{
    
   
    return(
    <div>
       <h1>Header</h1>
      <Link to={'/'}>  Home  </Link>
       <Link to={'/services'}> services </Link>
       <Link to={'/contact'}>  Contact </Link>
    </div>
    )
}
export default Header;