import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/sb-admin-2.css';

import Users from './Users';
import CreateUser from './CreateUser';
import Portal from './Portal';
import Login from './Login';
import UsersView from './UsersView';
import EditUser from './EditUser';
import Books from './Library';
import BookView from './LibraryView';
import EditLibrary from './EditLibrary';
import CreateBooks from './CreateLibrary';




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/portal' element={<Portal />}>
          <Route path='users' element={<Users />}></Route>
          <Route path='users/:id' element={<UsersView />}></Route>
          <Route path='users/edit/:id' element={<EditUser />}></Route>
          <Route path='createuser' element={<CreateUser />}></Route>
          <Route path='books' element={<Books/>}></Route>
          <Route path='book/:id' element={<BookView />}></Route>
          <Route path='book/edit/:id' element={<EditLibrary />}></Route>
          <Route path='createbook' element={<CreateBooks />}></Route>
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;

