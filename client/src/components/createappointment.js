import React from 'react'
import '../styling/createappointment.css'

export default function CreateAppointment(){
    return(
        <div id='create-appointment-page'>

            <form id='create-form'>

                <h1>Book an Appointment</h1>

                <div className='row mb-3'>
                    <label className='form-label'>Select Doctor</label>
                    <select className='form-select'>
                        <option>Choose Doctor ....</option>
                    </select>
                </div>

                <div className='row mb-3'>
                    <label className='form-label'>Date</label>
                    <input type='date' className='form-control' required />
                </div>

                <div className='row mb-3'>
                    <label className='form-label'>Duration</label>
                    <input type='text' placeholder='e.g 30 minutes' required/>
                </div>

                <div className='row mb-3'>
                    <label className='form-label'>Type of Appointment</label>
                    <input type='text' placeholder='e.g Consultation' required/>
                </div>

                <div style={{textAlign: 'center'}}>
                    <button className='btn btn-primary' style={{width: '150px'}}>Book</button>
                </div>

            </form>

        </div>
    )
}