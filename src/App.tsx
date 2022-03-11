import { ChakraProvider } from '@chakra-ui/react'; 
import React from 'react';  
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';   
import Dashboard from './Screen/Dashboard';
import LoginScreen from './Screen/LoginScreen';
import NewPassword from './Screen/NewPassword';
import ResetPassword from './Screen/ResetPassword'; 
import Doctor from './tabScreens/Doctor';
import PatientProfile from './tabScreens/PatientProfile'; 
import Pharmacy from './tabScreens/Pharmacy';

function App() {
  return ( 
    <ChakraProvider>
      <Router>  
        <Routes>    
          <Route path='/' element={<LoginScreen />}/> 
          <Route path='/resetpassword' element={<ResetPassword />}/> 
          <Route path='/newpassword' element={<NewPassword />}/> 
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='/dashboard' element={<Doctor />} />
            <Route path='/dashboard/patientprofile' element={<PatientProfile />} />
            {/* <Route path='/pharmacy' element={<Pharmacy />} /> */}
          </Route>
            <Route path='/pharmacy' element={<Pharmacy />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
