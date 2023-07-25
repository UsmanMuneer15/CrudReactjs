import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Read() {

    const [apiData, setApiData] = useState([])
    function getData() {
        axios.get('https://64783a37362560649a2d59cc.mockapi.io/crud')
            .then((response) => {
                setApiData(response.data);
            })
    }
    function handleDelete(id) {
        axios.delete(`https://64783a37362560649a2d59cc.mockapi.io/crud/${id}`)
            .then(() => {
                getData()
            })
    }
    function setDataToStorage(id, name, age, email) {
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('age', age);
        localStorage.setItem('email', email);
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <>
            <div className='col-md-12'>
                <div className='mb-2'>
                    <Link to='/create'>
                        <button className='btn btn-primary'>Create New Data</button></Link>
                </div>
                <table className="table table-bordered table-striped table-dark table-hover"  >
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">AGE</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">EDIT</th>
                            <th scope="col">DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            apiData.map((item) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.e_name}</td>
                                            <td>{item.e_age}</td>
                                            <td>{item.e_email}</td>
                                            <td>
                                                <Link to='/edit'>
                                                    <button className='btn btn-primary' onClick={() => setDataToStorage(item.id, item.e_name, item.e_age, item.e_email)}>
                                                        Edit
                                                    </button>
                                                </Link>
                                            </td>
                                            <td>
                                                <button className='btn btn-danger' onClick={() => { if (window.confirm('Are You Sur To Delete Data ?? ')) { handleDelete(item.id) } }}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }

                    </tbody>
                </table>

            </div>
        </>
    )
}

export default Read