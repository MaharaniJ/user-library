import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';

function UserView() {

    const params = useParams()
    
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(...searchParams)
    const [userData, setuserData] = useState({});
    
    useEffect(()=>{
        loaduser()
    },[])
    let loaduser = async ()=>{
        try {
            let user = await axios.get(`https://645cd360e01ac61058945382.mockapi.io/users/${params.id}`)
            setuserData(user.data)
        }
        catch(error){

        }
       
}
   
  return (
    <div>
        <h1>{userData.username}</h1>
        <h1>{userData.userid}</h1>
        <h1>{userData.subject}</h1>
        <h1>{userData.bookname}</h1>
        <h1>{userData.bookid}</h1>
       <h1>{userData.admissionon}</h1>
        </div>
  )
}

export default UserView;