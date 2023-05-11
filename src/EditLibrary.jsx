import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditBooks() {
    const params = useParams()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues:  {
        teachername:'',
        subject:'',
        id:'',
        expire:'',
        joiningdate:''
        
    },
    validate:(values) =>{
let errors ={}

if(values.bookname === ""){
    errors.teachername="Please Enter teachername"
}
if(values.subject === ""){
errors.subject="Please Enter subject"
}

if(values.bookid === ""){
errors.bookid="Please Enter id"
}


if(values.expire === ""){
    errors.expire="Please Enter expiredate"
}


if(values.joiningdate === ""){
    errors.joiningdate="Please Enter joiningdate"
}


return errors;
    },
    onSubmit: async (values)=>{
        await axios.put(`https://645cd360e01ac61058945382.mockapi.io/books/${params.id}`,values)
        alert("update book")
        navigate("/portal/books")
       
    }
})
useEffect(()=>{
    loadteacher()

},[])
let loadteacher = async ()=>{
    try{
        let books = await axios.get(`https://645cd360e01ac61058945382.mockapi.io/books/${params.id}`)
        formik.setValues({
            teachername:books.data.bookname,
            subject:books.data.subject,
            id:books.data.bookid,
            salary:books.data.expire,
            joiningdate:books.data.joiningdate
            
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
            <label>Book Name</label>
            <input 
            className='form-control'
             type={"text"}
        value={formik.values.bookname}
        onChange={formik.handleChange}
        name="bookname">
        </input>
        <span style={{color:'red'}}>{formik.errors.bookname}</span>
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
            <label>Book Id</label>
            <input className='form-control'
            type={"text"}
             value={formik.values.bookid}
             onChange={formik.handleChange} 
             name="bookid"
              ></input>
               <span style={{color:'red'}}>{formik.errors.bookid}</span>
            </div>
           <div className='col-lg-6'>
            <label>Expires On</label>
            <input className='form-control'
            value={formik.values.expire}
            onChange={formik.handleChange}
            name="expire"
            type={"text"}></input>
             <span style={{color:'red'}}>{formik.errors.expire}</span>
            </div>
            <div className='col-lg-6'>
            <label>Joining Date</label>
            <input className='form-control'
            value={formik.values.joiningdate}
            onChange={formik.handleChange}
            name="joiningdate"
             type={"text"}></input>
              <span style={{color:'red'}}>{formik.errors.joiningdate}</span>
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

export default EditBooks;