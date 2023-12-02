import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:5000/api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
    })

    const json = await response.json()
    console.log(json)

    if (json.success) {
      navigate('/login')
    }

    if (!json.success) {
      alert("Enter valid credentials")
    }

  }

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-5 mb-3 ">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control bg-dark" placeholder='Enter your name' name='name' value={credentials.name} onChange={onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control bg-dark" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
              name='email' value={credentials.email} onChange={onChange} />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control bg-dark" placeholder="Password" name='password'
              value={credentials.password} onChange={onChange} />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="exampleInputPassword1">Address</label>
            <input type="text" className="form-control bg-dark" placeholder="Password" name='geolocation'
              value={credentials.geolocation} onChange={onChange} />
          </div>

          <button type="submit" className="btn btn-primary mt-3">Submit</button>
          <Link to={'/login'} className='btn btn-danger mt-3 mx-5'>Already a User</Link>
        </form>
      </div>
    </>
  )
}

export default Signup