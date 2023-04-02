import React from 'react'
import {Link} from 'react-router-dom'
import '../styling/landingpage.css'
import appointmentImage from '../styling/appointment-booking.avif'

export default function LandingPage(){
    return(
        <div id='landng-page'>
            <img src={appointmentImage} alt="background_image" id='background-image'/>
            <div style={{marginLeft: '30px', marginTop: '8px'}}>
                <h1 className='text-primary'style={{fontSize: '90px'}}>BOOK DOCTOR</h1>
                <h1 className='text-primary' style={{fontSize: '80px'}}>APPOINTMENT</h1>
                <h1 className='text-primary' style={{fontSize: '60px'}}>ONLINE</h1>
            </div>
            <div className='row mt-5'>
                <div className='col-4'>
                    <Link to='/register' className='btn btn-light text-primary border-primary' style={{marginLeft: '50px'}}>Register</Link>
                </div>
                <div className='col-4'>
                    <Link to='/login' className='btn btn-light text-primary border-primary' style={{marginLeft: '-190px'}}>Log In</Link>
                </div>
            </div>
        </div>
    )
}