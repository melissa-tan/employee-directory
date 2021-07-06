import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import Header from './components/Header';
import Search from './components/Search';

function App() {
    const [employees, setEmployees] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]);

    const filter = (e) => {
        const keyword = e.target.value;
        if (keyword !== '') {
            const results = employees.filter((employee) => {
                return (
                    employee.name.first.toLowerCase().startsWith(keyword.toLowerCase()) ||
                    employee.name.last.toLowerCase().startsWith(keyword.toLowerCase())
                );
            });
            setFilteredEmployees(results);
        } else {
            setFilteredEmployees(employees);
        }
    };


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get('https://randomuser.me/api/?results=20');
            setEmployees(request.data.results);
            setFilteredEmployees(request.data.results);
        }
        fetchData();
    }, [])

    return (
        <>
            <Header />
            <Search filter={filter}/>
            <Table employees={filteredEmployees} />
        </>
    );
}

export default App;
