/* eslint-disable no-undef */

import './App.css';

import { BrowserRouter,Link,Navigate,Route, Routes } from 'react-router-dom';

import Dashboard from './Components/Dashboard';
import Users from './Components/Users';
import Create from  './Components/Create';
import Edit from  './Components/Edit';
import Profile from  './Components/Profile';
import EditProfile from  './Components/EditProfile';

function App() {

  return (

    <div className="App" >
    <BrowserRouter>
      <header>
        <table>
          <tr>
            <td className="td">
              <Link to="/Dashboard">Dashboard</Link>
            </td>
            <td className="td">
              <Link to="/Dashboard/Users">Users</Link>
            </td>
            <td className="td">
              <Link to="/Dashboard/Create">Create</Link>
            </td>
            <td className="td">
              <Link to="/Dashboard/Edit">Edit</Link>
            </td>
            <td className="td">
              <Link to="/Dashboard/Profile">Profile</Link>
            </td>
            <td className="td">
              <Link to="/Dashboard/EditProfile">EditProfile</Link>
            </td>
          </tr>
        </table>
      </header>
    
      <Routes>
        <Route index path='/' element={<Dashboard />} />
          <Route path='Dashboard'>
            <Route index element={<Dashboard />} />
            <Route path='Users' element={<Users />} />
            <Route path='Create' element={<Create />} />
            <Route path='Edit' element={<Edit />} />
            <Route path=':Profile' element={<Profile />} />
            <Route path=':EditProfile' element={<EditProfile />} />
          </Route>
        <Route path='/404' element={<h3>Page not found, please check url</h3>} />
        <Route path='*' element={<Navigate to="/Dashboard" replace />} />
      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
