import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './components/RootLayOut'
import HomePage from './pages/auths/HomePage'
import About from './pages/auths/About'
import NotFound from './components/NotFound'
import Loading from './components/Loading'



const App = () => {
  return (
    <Routes>

      <Route path='/' element={<RootLayOut />}>
        <Route index element={<HomePage />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Loading />} />
        <Route path="*" element={<NotFound/>} />
      </Route>

    </Routes>
  )
}

export default App
