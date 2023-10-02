import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './components/RootLayOut'
import NotFound from './components/NotFound'
import Loading from './components/Loading'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Login from './pages/auths/Login'
import SignUp from './pages/auths/SignUp'
import Profile from './pages/AdminPage/Profile'



const App = () => {
  return (
    <Routes>

      <Route path='/' element={<RootLayOut />}>
        <Route index element={<HomePage />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Loading />} />
        <Route path='user/login' element={<Login />} />
        <Route path='user/register' element={<SignUp />} />
        <Route path='user/profile' element={<Profile />} />
        <Route path="*" element={<NotFound/>} />
      </Route>

    </Routes>
  )
}

export default App
