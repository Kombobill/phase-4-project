import React from 'react'
import {Link} from 'react-router-dom'
import '../styling/landingpage.css'
import appointmentImage from '../styling/appointment-booking.avif'
import {useAuth} from './auth.js'
import logo from '../styling/logo.png'

export default function LandingPage(){
    const auth = useAuth()
    return(
        <div id='landng-page'>
            <img src={appointmentImage} alt="background_image" id='background-image'/>
            <div style={{marginLeft: '30px', marginTop: '8px'}}>
                <h4 className='text-dark' style={{fontSize: '90px'}}>BOOK YOUR</h4>
                <h4 className='text-dark' style={{fontSize: '80px'}}>APPOINTMENT</h4>
                <h4 className='text-dark' style={{fontSize: '60px'}}>ONLINE</h4>
            </div>
            {/* {
                !auth.user && (
                    <div className='row mt-2 text-center'>
                    <div className='col-4'>
                      <Link to='/register' className='btn btn-light text-primary border-primary font-weight-bold' style={{position: 'absolute', left: '-120px'}}>Book an appointment</Link>
                    </div>
                  </div>
                  
                )
            } */}
            <div className='about-us-section' style = {{marginRight: "100px"}}>
                <h2>About Us</h2>
                <p>We are a platform for booking doctor appointments online. Our mission is to make it easy and convenient for patients to find and book appointments with trusted doctors.</p>
            </div>
            <footer>
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <img src={logo} alt="logo" style={{height: '50px', marginBottom: '10px'}} />
    <p>&copy; {new Date().getFullYear()} Book An Appointment. All rights reserved.</p>
  </div>
</footer>
        </div>
    )
}
