import { useFormik } from 'formik';
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const navigate = useNavigate()
    const formik = useFormik({
       
        initialValues:  {
        username:'',
        userid:"",
        subject:'',
        bookid:'',
        bookname:'',
        admissionon:""
        },
    validate:(values) =>{
let errors ={}

if(values.username === ""){
    errors.username="Please Enter name"
}
if(values.userid === ""){
errors.userid="please enter id"
}
if(values.subject === ""){
errors.subject="Please Enter subject"
}

if(values.bookid === ""){
errors.bookid="Please Enter id"
}
if(values.bookname === ""){
    errors.bookname="Please Enter bookname"
}
if(values.admissionon === ""){
    errors.admissionon="Please Enter admissionon"
}





//`https://63fcaeb9859df29986c21a62.mockapi.io/mockapi/student`
return errors;
    },
    onSubmit: async (values)=>{
        let users = await axios.post(`https://645cd360e01ac61058945382.mockapi.io/users`, values)
        alert("user Created")
        navigate('/portal/users')
    }
}

    )

  return (
    <>
    
        <div className='container'>
            <form onSubmit={formik.handleSubmit}>
        <div className='row'>
        
        <div className='col-lg-6'>
            <label>UserName</label>
            <input 
            className='form-control'
             type={"text"}
        value={formik.values.username}
        onChange={formik.handleChange}
        name="username">
        </input>
        <span style={{color:'red'}}>{formik.errors.username}</span>
            </div>
            <div className='col-lg-6'>
            <label>UserId</label>
            <input className='form-control'
            value={formik.values.userid}
            onChange={formik.handleChange} 
            name="userid"
            type={"text"}>
            </input>
            <span style={{color:'red'}}>{formik.errors.userid}</span>
            </div>
            <div className='col-lg-6'>
            <label>Subject</label>
            <input className='form-control'
            type={"text"}
             value={formik.values.subject}
             onChange={formik.handleChange} 
             name="subject"
              ></input>
               <span style={{color:'red'}}>{formik.errors.subject}</span>
            </div>
           <div className='col-lg-6'>
            <label>Book Name</label>
            <input className='form-control'
            value={formik.values.bookname}
            onChange={formik.handleChange}
            name="bookname"
            type={"text"}></input>
             <span style={{color:'red'}}>{formik.errors.bookname}</span>
            </div>
            <div className='col-lg-6'>
            <label>BookId</label>
            <input className='form-control'
            value={formik.values.bookid}
            onChange={formik.handleChange}
            name="bookid"
             type={"text"}></input>
              <span style={{color:'red'}}>{formik.errors.bookid}</span>
            </div>

            <div className='col-lg-6'>
            <label>Admission On</label>
            <input className='form-control'
            value={formik.values.admissionon}
            onChange={formik.handleChange}
            name="admissionon"
             type={"text"}></input>
              <span style={{color:'red'}}>{formik.errors.admissionon}</span>
            </div>
            
           <div className='col-lg-6'>
            <button className='btn btn-primary mt-2' 
            type={"submit"} value={"submit"} disabled={!formik.isValid}>submit</button>
            </div>
            
        </div>
        </form>
    </div>
    </>
   

  )
}

export default CreateUser;