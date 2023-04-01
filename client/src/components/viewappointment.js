import React from 'react'
import '../styling/viewappointments.css'


export default function ViewAppointment(){

    return(
        <div id='all-appointments-page'> 

            <div id='welcome-message'>
                <h1>Hi, name</h1>
                <h3>Here is a list of all your appointments.</h3>
            </div>

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
                                <button className='btn btn-info'>Update</button>
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