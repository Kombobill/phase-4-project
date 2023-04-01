import React, {useEffect, useState} from 'react'
import '../styling/viewappointments.css'
import {Link} from 'react-router-dom'


export default function ViewAppointment(){

    const[appointments, setAppointments] = useState([])
    const[error, setErrors] = useState([])

    useEffect(() => {
        fetch('/patient-appointment')
        .then(response => {
            if(response.ok){
                response.json().then(data => setAppointments(data))
            }else{
                response.json().then(errorData => setErrors(errorData.error))
            }
        })
    },[])

    // const allAppointments = appointments.map((appointment) => {
    //     return(
    //         <tr key={appointment.id}>
    //         <td>{appointment.id}</td>
    //         <td>{appointment.doctor_id}</td>
    //         <td>Patrick</td>
    //         <td>Paeditrician</td>
    //         <td>{appointment.date}</td>
    //         <td>{appointment.duration}</td>
    //         <td className='row'>
    //             <div className='col-6'>
    //                 <button className='btn btn-info'>Update</button>
    //             </div>

    //             <div className='col-6'>
    //                 <button className='btn btn-danger'>Delete</button>
    //             </div>
    //         </td>
    //     </tr>
    //     )
    // })

    return(
        <div id='all-appointments-page'> 

            <div id='welcome-message'>
                <h1>Hi, name</h1>
                <h3>Here is a list of all your appointments.</h3>
            </div>

            <div id='add-button'>
                <Link className='btn btn-success' to='/create-appointment'><span style={{fontSize: '25px'}}>+</span>  Create Appointment</Link>
            </div>

            

            {
                error.length > 0 && (
                    <ul style={{color: 'red'}}>
                        <li>{error}</li>
                    </ul>
                )
            }

            <table className='table'  id='appointments-table'>

                <thead className='bg-primary' >
                    <tr className='text-light'>
                        <td>No.</td>
                        <td>Doctor ID.</td>
                        <td>Doctor Name</td>
                        <td>Speciality</td>
                        <td>Date</td>
                        <td>Duration</td>
                        <td>Action</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>3</td>
                        <td>Patrick</td>
                        <td>Paeditrician</td>
                        <td>26/5/2023</td>
                        <td>1 hour</td>
                        <td className='row'>
                            <div className='col-6'>
                                <Link className='btn btn-info' to='/update-appointment'>Update</Link>
                            </div>

                            <div className='col-6'>
                                <button className='btn btn-danger'>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>

            </table>

        </div>
    )
}