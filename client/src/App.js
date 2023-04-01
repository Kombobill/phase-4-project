import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import NavBar from './components/navbar'
import SignInPage from './components/SignInPage'
import RegisterPage from './components/RegisterPage'
import ForgetPasswordPage from './components/ForgetPasswordPage'

function App() {
    return (
    <div id='app'>
        <NavBar/>
                <Routes>
                    <Route path="/" element={ <LandingPage/> } />
                    <Route path="/login" element={ <SignInPage/> } />   
                    <Route path="/register" element={ <RegisterPage />} />
                    <Route path="/forget-password" element={ <ForgetPasswordPage />} />
                </Routes>
    </div>
    )
}
export default App;