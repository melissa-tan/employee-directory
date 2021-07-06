import React, { useRef, useEffect } from 'react'

export default function Search({ filter }) {
    const searchRef = useRef('')
    useEffect(() => {
        searchRef.current.focus()
    }, [])

    return (
        <div>
            <input type='text' ref={searchRef} onChange={filter} className='input' placeholder="Search by employee's first or last name" />
        </div>
    )
}
