import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import Header from './components/Header';

function App() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get('https://randomuser.me/api/?results=20');
            setEmployees(request.data.results);
        }
        fetchData();
    }, [])

    return (
        <>
            <Header />
            <Table employees={employees}/>
        </>
    );
}

export default App;
