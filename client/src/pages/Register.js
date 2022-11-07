import React from 'react'
import Wrapper from '../assets/wrappers/RegisterPage'
import {Logo} from '../components'
import { useState,useEffect } from 'react'

const initialState={
  name:'',
  email:'',
  password:'',
  isMember:true,
}


function Register() {

  const [values,setValues] =useState(initialState)
  const onSubmit= (e)=>{
    e.preventDefault();
    console.log(e.target)
  }
  const handleChange=(e)=>{
    setValues(e.target.value)
    console.log(e.target.value)
  }
  return (
    <Wrapper className='full-page'>
      <form onSubmit={onSubmit} className="form">
      <Logo/>
      <h3>Login</h3>
      {/* name field */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input type="text" 
        className="form-input"
        name='name'
        value={values.name}
        onChange={handleChange}
        />
      </div>
      <button type='submit' className="btn btn-block">
        submit
      </button>

      </form>

    </Wrapper>
  )
}

export default Register