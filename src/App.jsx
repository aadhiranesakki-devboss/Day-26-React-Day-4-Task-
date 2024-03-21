// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes, Route,Navigate } from 'react-router-dom'
import All from './components/All'
import Fsd from './components/Fsd'
import Datascience from './components/Datascience'
import Cyber from './components/Cyber'
import Career from './components/Career'

function App() {
  return <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/all' element={<All/>}/>
        <Route path='/fsd' element={<Fsd/>}/>
        <Route path='/datascience' element={<Datascience/>}/>
        <Route path='/cybersecurity' element={<Cyber/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='*' element={<Navigate to='/all'/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App