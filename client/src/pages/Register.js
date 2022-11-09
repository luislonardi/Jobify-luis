import React from 'react'
import Wrapper from '../assets/wrappers/RegisterPage'
import {Logo,FormRow,Alert} from '../components'
import { useState,useEffect } from 'react'

const initialState={
  name:'',
  email:'',
  password:'',
  isMember:true,
  showAlert: true,
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

  const toggleMember= ()=> {
    setValues({...values,isMember:!values.isMember})
  }
  return (
    <Wrapper className='full-page'>
      <form onSubmit={onSubmit} className="form">
      <Logo/>
      <h3>{values.isMember? 'Login':'Register'}</h3>
      {values.showAlert && <Alert/>}
      {/* name field */}
      {!values.isMember && ( 
      <FormRow
       type='text'
       name='name'
       value={values.name}
       handleChange={handleChange}
       
       />
       )}
      {/* email input */}
      <FormRow
       type='email'
       name= 'email'
       value= {values.email}
       handleChange={handleChange}
       />
       {/* password input */}
       <FormRow
       type='password'
       name= 'password'
       value= {values.password}
       handleChange={handleChange}
       />

      <button type='submit' className="btn btn-block">
        submit
      </button>
        <p>
          {values.isMember? 'Not a member yet?':'Already a member?'}
          <button type='button' onClick={toggleMember} className="member-btn">
          {values.isMember? 'Register':'Login'}
          </button>
        </p>
      </form>

    </Wrapper>
  )
}

export default Register