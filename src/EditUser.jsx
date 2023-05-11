import { useFormik } from 'formik'
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditUser() {
    const params = useParams()
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
errors.username="please enter id"
}
if(values.subject === ""){
errors.subject="Please Enter subject"
}
if(values.bookid === ""){
    errors.bookid="Please Enter id"
    }
if(values.bookname === ""){
    errors.bookname="Please Enter Bookname"
}
if(values.admissionon === ""){
    errors.admissionon="Please Enter Admission Date"
}


return errors;
    },
    onSubmit: async (values)=>{
       let users =  await axios.put(`https://645cd360e01ac61058945382.mockapi.io/users/${params.id}`,values)
       alert("user updated")
        navigate("/portal/users")

       
    }
})
useEffect(()=>{
    loaduser()

},[])
let loaduser = async ()=>{
    try{
        let user = await axios.get(`https://645cd360e01ac61058945382.mockapi.io/users/${params.id}`)
        formik.setValues({
            username:user.data.username,
             userid :user.data.userid,
           subject:user.data.subject,
            bookid:user.data.bookid,
            bookname:user.data.bookname,
            admissionon:user.data.admissionon
            
        }
        )
        
    }
    catch (error){

    }
}


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
            value={formik.values.subject}
            onChange={formik.handleChange} 
            name="subject"
            type={"text"}>
            </input>
            <span style={{color:'red'}}>{formik.errors.subject}</span>
            </div>
            <div className='col-lg-6'>
            <label>BookId</label>
            <input className='form-control'
            type={"text"}
             value={formik.values.bookid}
             onChange={formik.handleChange} 
             name="bookid"
              ></input>
               <span style={{color:'red'}}>{formik.errors.bookid}</span>
            </div>
           <div className='col-lg-6'>
            <label>BookName</label>
            <input className='form-control'
            value={formik.values.bookname}
            onChange={formik.handleChange}
            name="bookname"
            type={"text"}></input>
             <span style={{color:'red'}}>{formik.errors.bookname}</span>
            </div>
            <div className='col-lg-6'>
            <label>Admission Date</label>
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

export default EditUser