import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import NavBar from './components/navbar'
import RegisterPage from './components/RegisterPage'
import ForgetPasswordPage from './components/ForgetPasswordPage'
import CreateAppointment from './components/createappointment'
import UpdateAppointment from './components/updateappointment'
import ViewAppointment from './components/viewappointment'

export default function App() {
    return (
    <div>
        <NavBar/>
                <Routes>
                    <Route path="/" element={ <LandingPage/> } />
                    <Route path="/register" element={ <RegisterPage />} />
                    <Route path="/forget-password" element={ <ForgetPasswordPage />} />
                    <Route path='/create-appointment' element={<CreateAppointment/>} />
                    <Route path='/update-appointment/:id' element={<UpdateAppointment/>} />
                    <Route path='/appointments' element={<ViewAppointment/>} />
                </Routes>
    </div>
    )
}
