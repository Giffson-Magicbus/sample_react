import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import Contact from './components/Contact'
import Error from './components/Error'
import Header from './components/Header'
const App = () => {

   
  return (
<Router>
  <Header/>
    <Routes>
      <Route path='/' index exact element={<Home />}/>
      <Route path='/services/:tool'  element={<Services />}/>
      <Route path='/contact'  element={<Contact />}/>
      <Route path='*'  element={<Error />}/>
    </Routes>
</Router>
  )
}

export default App