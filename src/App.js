
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
    <div className="App">
    <BrowserRouter>
    <Link to="/Dashboard">Dashboard </Link>&nbsp;&nbsp;
    <Link to="/Dashboard/Users">Users </Link>&nbsp;&nbsp;
    <Link to="/Dashboard/Create">Create</Link>&nbsp;&nbsp;
    <Link to="/Dashboard/Edit">Edit </Link>&nbsp;&nbsp;
    <Link to="/Dashboard/Profile">Profile</Link>&nbsp;&nbsp;
    <Link to="/Dashboard/EditProfile">EditProfile </Link>&nbsp;&nbsp;
    <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path='/Dashboard' element={<Dashboard />} />
    <Route path='/Dashboard/Users' element={<Users />} />
    <Route path='/Dashboard/Create' element={<Create />} />
    <Route path='/Dashboard/Edit' element={<Edit />} />
    <Route path='/Dashboard/Profile' element={<Profile />} />
    <Route path='/Dashboard/EditProfile' element={<EditProfile />} />
    <Route path='*' element={<Navigate to="/Dashboard" replace />} />
    </Routes>
    </BrowserRouter>

      <br />
      
      <br />
      
      <br />
      
      <br />
      
      <br />
      

    </div>
  );
}

export default App;
