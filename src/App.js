import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import RegisterPage from './components/RegisterPage'
import ForgetPasswordPage from './components/ForgetPasswordPage'

export default function App() {
    return (
    <>
    <div>
      <h1>Central Hospital</h1>
    </div>
  

        <Router>
            <div>
                <Routes>
                    <Route path="/" element={ <LandingPage/> } />
                    <Route path="/login" element={ <signinPage/> } />
                    <Route path="/register" element={ <RegisterPage />} />
                    <Route path="/forget-password" element={ <ForgetPasswordPage />} />

                 
                    </Routes>
            </div>
        </Router>
        </>
    )
}



