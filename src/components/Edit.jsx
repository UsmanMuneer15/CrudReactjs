import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Edit() {

    const [id, setId] = useState(0);
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [email, setEmail] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setEmail(localStorage.getItem('email'));
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://64783a37362560649a2d59cc.mockapi.io/crud/${id} `, {
            e_name: name,
            e_age: age,
            e_email: email
        }).then(() => {
            navigate('/');
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <div className='container'>
                <div className='mb-2'>
                    <Link to='/'>
                        <button className='btn btn-primary'>Read Data</button></Link>
                </div>
                <div className='bg-primary p-4 text-center'>
                    <h1>Update Page</h1>
                </div>
                <form onSubmit={handleUpdate}>
                    <div className="mb-3">
                        <label className="form-label">Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Age:</label>
                        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div className='d-grid'>
                        <button type="submit" value='update' className="btn btn-primary">Submit</button>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default Edit