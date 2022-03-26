import { ChakraProvider } from '@chakra-ui/react'; 
import React from 'react';  
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';   
import ReceptionistSchedular from './components/receptionistComponent/ReceptionistSchedular';
import ReceptionistTab from './components/receptionistComponent/ReceptionistTab';
import DoctorScreen from './Screen/DoctorScreen';
import LoginScreen from './Screen/LoginScreen';
import NewPassword from './Screen/NewPassword';
import ReceptionistScreen from './Screen/ReceptionistScreen';
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
          <Route path='/doctor' element={<DoctorScreen />}>
            <Route path='/doctor' element={<Doctor />} />
            <Route path='/doctor/patientprofile' element={<PatientProfile />} />
            {/* <Route path='/pharmacy' element={<Pharmacy />} /> */}
          </Route>
          <Route path='/receptionist' element={<ReceptionistScreen />}>
            <Route path='/receptionist' element={<ReceptionistTab />} /> 
            <Route path='/receptionist/schedular' element={<ReceptionistSchedular />} /> 
          </Route>
            <Route path='/pharmacy' element={<Pharmacy />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
