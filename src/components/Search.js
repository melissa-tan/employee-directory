import React, { useRef, useEffect } from 'react'

export default function Search({ filter }) {
    const searchRef = useRef('')
    useEffect(() => {
        searchRef.current.focus()
    }, [])
/*     const [filteredEmployees, setFiltersEmployees] = useState([]);
    const searchRef = useRef('')

    const filter = (e) => {
        const keyword = e.target.value;
        if (keyword !== '') {
            const results = employees.filter((employee) => {
                return (
                    employee.name.first.toLowerCase().startsWith(keyword.toLowerCase()) ||
                    employee.name.last.toLowerCase().startsWith(keyword.toLowerCase())
                );
            });
            setFiltersEmployees(results);
        } else {
            setFiltersEmployees(employees);
        }
    };

    useEffect(() => {
        searchRef.current.focus()
    }, []) */

    return (
        <div>
            <input type='text' ref={searchRef} onChange={filter} className='input' placeholder="Search by employee's first or last name" />
        </div>
    )
}
