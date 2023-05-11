import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


function Books() {
    const [books, setBooks] = useState([])
    const [isLoading, setLoading] = useState(false)
    
    useEffect(() => {
        loaddata()

    }, [])

    let loaddata = async () => {
        setLoading(true)
        let books = await axios.get(`https://645cd360e01ac61058945382.mockapi.io/books`)
        setBooks(books.data)
        setLoading(false)
    }
    let bookDelete = async (id)=>{
        try{
            let ask  = window.confirm("Do you want to delete?")
            if(ask){
                await axios.delete(`https://645cd360e01ac61058945382.mockapi.io/books/${id}`)
                loaddata()
            }
   
        }
        catch (error){

        }
    }

    return (
        <div className="container-fluid">
            <div className='d-sm-flex align-items-center justify-content-between mb-4'>

                {/* <!-- Page Heading --> */}
                <h1 className="h3 mb-2 text-gray-800">Tables</h1>
                <p className="mb-4">
                    <Link to="/portal/createbook" className={"d-none d-sm-inline-block btn-sm btn-primary"}><li className='fas fa-download fa-sn text-white-50'>
                        </li>Create book</Link></p>
            </div>
            {/* <!-- DataTales Example --> */}
            {
                isLoading? <span>Loading...</span>:
                <div className="card shadow mb-4">
                <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>#Sl</th>
                                        <th>Book Name</th>
                                        <th>Subject</th>
                                        <th>Book Id</th>
                                        <th>Expires On</th>
                                        <th>Joining Date</th>
                                       <th>Action</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                    <th>#Sl</th>
                                        <th>Book Name</th>
                                        <th>Subject</th>
                                        <th>Book Id</th>
                                        <th>Expires On</th>
                                        <th>Joining Date</th>
                                       <th>Action</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {
                                        books.map((book, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{book.bookname}</td>
                                                    <td>{book.subject}</td>
                                                    <td>{book.id}</td>
                                                    <td>{book.bookname}</td>
                                                    <td>{book.joiningdate}</td>
                                                    <td>
                                                    <Link to={`/portal/book/${book.id}`} className='btn btn-sm btn-warning mr-2'>View</Link>
                                                    <Link to={`/portal/book/edit/${book.id}`} className='btn btn-sm btn-primary mr-2'>Edit</Link>
                                                    <button onClick={()=>bookDelete(book.id)} className='btn btn-sm btn-danger mr-2'>Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            }
        </div>
        // <!-- /.container-fluid -->


    )
}

export default Books;
