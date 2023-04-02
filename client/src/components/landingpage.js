import React from 'react'
import {Link} from 'react-router-dom'
import '../styling/landingpage.css'
import appointmentImage from '../styling/appointment-booking.avif'
import {useAuth} from './auth.js'

export default function LandingPage(){
    const auth = useAuth()
    return(
        <div id='landng-page'>
            <img src={appointmentImage} alt="background_image" id='background-image'/>
            <div style={{marginLeft: '30px', marginTop: '8px'}}>
                <h1 className='text-primary' style={{fontSize: '90px'}}>BOOK DOCTOR</h1>
                <h1 className='text-primary' style={{fontSize: '80px'}}>APPOINTMENT</h1>
                <h1 className='text-primary' style={{fontSize: '60px'}}>ONLINE</h1>
            </div>
            {
                !auth.user && (
                    <div className='row mt-5'>
                        <div className='col-4'>
                            <Link to='/register' className='btn btn-light text-primary border-primary' style={{marginLeft: '50px'}}>Register</Link>
                        </div>
                        <div className='col-4'>
                            <Link to='/login' className='btn btn-light text-primary border-primary' style={{marginLeft: '-190px'}}>Log In</Link>
                        </div>
                    </div>
                )
            }
            <div className='about-us-section'>
                <h2>About Us</h2>
                <p>We are a platform for booking doctor appointments online. Our mission is to make it easy and convenient for patients to find and book appointments with trusted doctors.</p>
            </div>
            <footer>
        <p>&copy; 2023 Book Doctor Appointment. All rights reserved.</p>
      </footer>
        </div>
    )
}
