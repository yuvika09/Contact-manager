import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom'
import Add_contact from './Components/Add_Contacts/Add_contact';
import Edit_contact from './Components/Edit_Contacts/Edit_contact';
import Navbar from './Components/NavBar/Navbar';
import Contact_list from './Components/Contacts_List/Contact_list';
import View_contact from './Components/View_Contacts/View_contact';

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
