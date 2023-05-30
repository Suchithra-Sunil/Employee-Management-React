import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { v4 as uuid }from "uuid";


function Add() {
  
    const [id,setId]=useState('')
    const [name,setName]=useState('')
    const [desig,setDesig]=useState('')
    const [sal,setSal]=useState(0)
    const [exp,setExp]=useState(0)

    useEffect(()=>{
      setId(uuid().slice(0,3))
    },[])

let location=useNavigate()    

const addEmployee=async (e)=>{
   e.preventDefault()
   setId(uuid().slice(0,3))
   const body={
     id,
     name,
     designation:desig,
     salary:sal,
     experience:exp
   }

  const result=await axios.post('http://localhost:8000/addEmployee',body)
  //redirect to home page
  location('/')
   alert(result.data.message)
}

 return (
    <div>
      <h2 className='text-center'>Add Employee Details</h2>
      <form action='' className='w-50 container p-5 text-center bg-secondary'>
        <input onChange={(e)=>setName(e.target.value)} className='form-control mt-2' type="text" placeholder='Employee Name' name='n1' id='an1'/>
        <input onChange={(e)=>setDesig(e.target.value)} className='form-control mt-2' type="text" placeholder='Designation' name='n2' id='an2'/>
        <input onChange={(e)=>setSal(e.target.value)} className='form-control mt-2' type="text" placeholder='Salary' name='n3' id='an3'/> 
        <input onChange={(e)=>setExp(e.target.value)} className='form-control mt-2' type="text" placeholder='Experience' name='n4' id='an4'/> 
        <button onClick={(e)=>addEmployee(e)} className='mt-2'>Save</button>
      </form>
    </div>
  )
}

export default Add