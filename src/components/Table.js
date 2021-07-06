import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons'

export default function Table({ employees }) {
    const [sortState, setSortState] = useState(true);
    const [sortedEmployees, setSortedEmployees] = useState([]);

    const sort = (column) => {
        const columnArray = column.split('.');
        const current =
            sortedEmployees.length > 0 ? sortedEmployees : employees;
        const updateSort = current.sort((a, b) => {
            const nameA =
                columnArray.length === 1
                    ? a[column]
                    : a[columnArray[0]][columnArray[1]];
            const nameB =
                columnArray.length === 1
                    ? b[column]
                    : b[columnArray[0]][columnArray[1]];
            if (nameA < nameB) {
                return sortState ? -1 : 1;
            }
            if (nameA > nameB) {
                return sortState ? 1 : -1;
            }
            return 0;
        });

        setSortedEmployees(updateSort);
        setSortState(!sortState);
    };



    return (
        <div className={'table-container'}>
            <table>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th onClick={() => sort('name.first')}>First&nbsp;
                            <FontAwesomeIcon icon={faSort} /></th>
                        <th onClick={() => sort('name.last')}>Last&nbsp;
                            <FontAwesomeIcon icon={faSort} /></th>
                        <th onClick={() => sort('email')}>Email&nbsp;
                            <FontAwesomeIcon icon={faSort} /></th>
                        <th onClick={() => sort('phone')}>Phone&nbsp;
                            <FontAwesomeIcon icon={faSort} /></th>
                        <th onClick={() => sort('location.country')}>Location&nbsp;
                            <FontAwesomeIcon icon={faSort} /></th>
                    </tr>
                </thead>
                <tbody>
                    {employees && employees.length > 0 ? (
                        employees.map((employee, index) => (
                            <tr key={employee.login.uuid} className={index % 2 === 0 ? 'odd' : 'even'}>
                                <td>
                                    <img className={'photo'} alt={employee.name.last} src={employee.picture.medium} />
                                </td>
                                <td>{employee.name.first}</td>
                                <td>{employee.name.last}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.location.country}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} className={'no-results'}>
                                No Results Found!
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
