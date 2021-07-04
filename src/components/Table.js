import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons'

export default function Table({ employees }) {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th onClick={(event) => console.log(event)} className={'hover'}>First&nbsp;
                            <FontAwesomeIcon icon={ faFilter } /></th>
                        <th onClick={(event) => console.log(event)} className={'hover'}>Last&nbsp;
                            <FontAwesomeIcon icon={ faFilter } /></th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody >
                    {employees && employees.length > 0 ? (

                        employees.map((employee) => (
                            <tr key={employee.login.uuid} >
                                <td>
                                    <img className={'headshot'} alt={employee.name.last} src={employee.picture.medium} />
                                </td>
                                <td>{employee.name.first}</td>
                                <td>{employee.name.last}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.location.country}</td>
                            </tr>
                        ))
                    ) : (<h1> No Results Found! </h1>)
                    }
                </tbody>
            </table>
        </div>
    )
}
