import React,{useEffect, useRef, useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';

function Login() {

  const textInput = useRef(null)
  const[credentials,setCredentials]=useState({email:"",password:""})
  let navigate = useNavigate()


const handleSubmit = async(e) =>{
  e.preventDefault();
  const response= await fetch('http://127.0.0.1:5000/api/loginuser',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({email:credentials.email, password:credentials.password})
  })
  const json = await response.json()
  console.log(json)

  if(!json.success){
    alert("Enter valid credentials")
  }

  if(json.success){
    localStorage.setItem("authToken",json.authToken)
    console.log(localStorage.getItem("authToken"))
    navigate('/')
  }

}

  const onChange=(event)=>{
    setCredentials({...credentials,[event.target.name]:event.target.value})
  }

  useEffect(()=>{
   textInput.current.focus() 
  },[])


  return (
    <div>
      <div className="container">
      <form onSubmit={handleSubmit}>
      
  <div className="form-group mt-5">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control bg-dark" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
    name='email' value={credentials.email} onChange={onChange} ref={textInput} autoComplete='off'/>
  </div>
  <div className="form-group mt-3">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control bg-dark" placeholder="Password" name='password'
     value={credentials.password} onChange={onChange}/>
  </div>
  
 
  <button type="submit" className="btn btn-primary mt-3">Submit</button>
  <Link to={'/createuser'} className='btn btn-danger mt-3 mx-5'>I'm a new User</Link>
</form>
      </div>
    </div>
  )
}

export default Login