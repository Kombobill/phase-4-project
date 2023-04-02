import React from 'react'
import {Routes, Route} from 'react-router-dom'
import SignInPage from './components/LogInPage'
import LandingPage from './components/landingpage'
import NavBar from './components/navbar'
import ViewDoctors from './components/Doctors'
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
                    <Route path="/login" element={ <SignInPage/> } />
                    <Route path="/register" element={ <RegisterPage />} />
                    <Route path='/doctors' element={<ViewDoctors/>} />
                    <Route path="/forget-password" element={ <ForgetPasswordPage />} />
                    <Route path='/create-appointment' element={<CreateAppointment/>} />
                    <Route path='/update-appointment/:id' element={<UpdateAppointment/>} />
                    <Route path='/appointments' element={<ViewAppointment/>} />
                </Routes>
    </div>
    )
}
