import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


function Edit() {

  // const [employee, setEmployee]=useState([])
    const [name,setName]=useState('')
    const [desig,setDesig]=useState('')
    const [sal,setSal]=useState(0)
    const [exp,setExp]=useState(0)

  const params=useParams()

  let location=useNavigate()    

  
  const fetchEmp = async () => {
    const result = await axios.get('http://localhost:8000/getEmployee/' + params.id)
    setName(result.data.message.name);
    setDesig(result.data.message.designation);
    setSal(result.data.message.salary);
    setExp(result.data.message.experience);
  }

 const editEmployee=async (e)=>{
  e.preventDefault()

  const body={
    id:params.id,
    name,
    designation:desig,
    salary:sal,
    experience:exp
  }  
  const result=await
  axios.post('http://localhost:8000/editEmployee/',body)
  location('/')
    alert(result.data.message)
  
 }

  useEffect(()=>{ fetchEmp() },[])

  // console.log(employee);

  return (
    <div>
        <h2 className='text-center'>Edit Employee Details</h2>
      <form action='' className='w-50 container p-5 text-center bg-secondary'>
        <input onChange={(e)=>setName(e.target.value)} value={name} className='form-control mt-2' type="text" placeholder='Employee Name' name='n1' id='an1'/>
        <input onChange={(e)=>setDesig(e.target.value)} value={desig} className='form-control mt-2' type="text" placeholder='Designation' name='n2' id='an2'/>
        <input onChange={(e)=>setSal(e.target.value)} value={sal} className='form-control mt-2' type="text" placeholder='Salary' name='n3' id='an3'/> 
        <input onChange={(e)=>setExp(e.target.value)} value={exp} className='form-control mt-2' type="text" placeholder='Experience' name='n4' id='an4'/> 
        <button onClick={(e)=>editEmployee(e)} className='mt-2'>Edit</button>
      </form>
    </div>
  )
}

export default Edit