import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Create() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://64783a37362560649a2d59cc.mockapi.io/crud', {
            e_name: name,
            e_age: age,
            e_email: email
        }).then(() => {
            navigate('/')
        })
    }
    return (
        <>
            <div className='container'>
                <div className='mb-2'>
                    <Link to='/'>
                        <button className='btn btn-primary'>Read Data</button></Link>
                </div>
                <div className='bg-primary p-4 text-center'>
                    <h1>Login Page</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name:</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Age:</label>
                        <input type="number" onChange={(e) => setAge(e.target.value)} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div className='d-grid'>
                        <button type="submit" className="btn btn-primary">Submit</button>

                    </div>
                </form>
                {name}
                <br></br>
                {age}
                <br></br>
                {email}

            </div>
        </>
    )
}

export default Create