import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function CreateBooks() {
    const navigate = useNavigate()

    const formik = useFormik({
       
        initialValues:  {
        bookname:'',
        subject:'',
        bookid:'',
       expire:'',
        joiningdate:''
        
    },
    validate:(values) =>{
let errors ={}

if(values.bookname === ""){
    errors.bookname="Please Enter book name"
}
if(values.subject === ""){
errors.subject="Please Enter subject"
}

if(values.booktid === ""){
errors.bookid="Please Enter bookid"
}

if(values.joiningdate === ""){
    errors.joiningdate="Please Enter joiningdate"
}


return errors;
    },
    onSubmit: async (values)=>{
        let books = await axios.post(`https://645cd360e01ac61058945382.mockapi.io/books`, values)
        alert("books Created")
        navigate('/portal/books')
    }
}
)
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
        <span style={{color:'red'}}>{formik.errors.teachername}</span>
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
            type={"text"}
             value={formik.values.expire}
             onChange={formik.handleChange} 
             name="expire"
              ></input>
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

export default CreateBooks;