import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Contact from './Component/Contact'
import Home from './Component/Home'
import NavBar from './Component/NavBar'
import Student from './Component/Student'
import Details from './Component/Detail'
import AddStudent from './Component/AddStudent'
import Page from './Component/Page'

import './index.css'

const App = () => {
  return ( <div className="main-container">


    <Details>
      <BrowserRouter>

        <NavBar/>

            <Routes>

                <Route path='/home' element={<Home/>}/>
                <Route path='/student' element={<Student/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/add-student' element={<AddStudent/>}/>
                <Route path='/' element={<Page/>}/>
              








            </Routes>




      </BrowserRouter>




      </Details>


      
      </div>
  )
}

export default App
