
import './App.css';
import Add_contact from './Components/Add_contact';
import Contact_list from './Components/Contact_list';
import Edit_contact from './Components/Edit_contact';
import Navbar from './Components/Navbar';
import View_contact from './Components/View_contact';
import { Route, Routes, Navigate } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={'/contacts/list'} />} />
        <Route path='/contacts/list' element={<Contact_list />} />
        <Route path='/contacts/add' element={<Add_contact />} />
        <Route path='/contacts/view/:contactId' element={<View_contact />} />
        <Route path='/contacts/edit/:contactId' element={<Edit_contact />} />
      </Routes>
    </>
  );
}

export default App;
