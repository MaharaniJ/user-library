import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';

function BooksView() {

    const params = useParams()
    
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(...searchParams)
    const [bookData, setbookData] = useState({});
    
    useEffect(()=>{
        loadbook()
    },[])
    let loadbook = async ()=>{
        try {
            let book = await axios.get(`https://645cd360e01ac61058945382.mockapi.io/books/${params.id}`)
            setbookData(book.data)
        }
        catch(error){

        }
       
}
   
  return (
    <div>
        
        <h1>{bookData.bookname}</h1>
        <h1>{bookData.subject}</h1>
        <h1>{bookData.teacheid}</h1>
        <h1>{bookData.salary}</h1>
        <h1>{bookData.joiningdate}</h1>
        </div>
  )
}

export default BooksView;