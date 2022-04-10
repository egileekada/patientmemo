import { ChakraProvider } from '@chakra-ui/react'; 
import React from 'react';  
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';   
// import NurseTab from './old/components/nurseComponent/NurseTab';
// import ReceptionistSchedular from './old/components/receptionistComponent/ReceptionistSchedular';
// import ReceptionistTab from './old/components/receptionistComponent/ReceptionistTab';
// import RegisterUser from './old/components/receptionistComponent/RegisterUser';
// import DoctorScreen from './old/Screen/DoctorScreen';
import LoginScreen from './screens/LoginScreen';
import NewPassword from './screens/NewPassword';
// import NurseScreen from './old/Screen/NurseScreen';
// import ReceptionistScreen from './old/Screen/ReceptionistScreen';
import ResetPassword from './screens/ResetPassword'; 
import DashboardScreen from './screens/DashboardScreen';
import DashboardTab from './Tabs/DashboardTab';
// import DashboardHome from './components/dashboardComponent/DashboardHome';
import RegisterPatient from './components/dashboardComponent/RegisterPatient';
import ManageScan from './components/dashboardComponent/ManageScan';
import AddNewUser from './components/dashboardComponent/AddNewUser';
import ManageBloodBank from './components/dashboardComponent/ManageBlood';
import ManagePatient from './components/dashboardComponent/ManagePatient';
import PatientFile from './components/dashboardComponent/PatientFile'; 
import { 
    QueryClient,
    QueryClientProvider,
  } from 'react-query' 
  import PharmacyTab from './Tabs/PharmacyTab';
import DoctorScreen from './screens/DoctorScreen';
import DoctorTab from './Tabs/DoctorTab';
import ContinuationSheet from './components/doctorComponent/ContinuationSheet';
import MakingRequest from './components/doctorComponent/MakingRequest';
import ManageContinuationSheet from './components/doctorComponent/ManageContinuationSheet';
// import Pharmacy from './Tabs/Pharmacy'; 
// import Doctor from './old/tabScreens/Doctor';
// import PatientProfile from './old/tabScreens/PatientProfile'; 
// import NursePatientProfile from './old/components/nurseComponent/PatientProfile'; 
// import PharmacyScreen from './old/Screen/PharmacyScreen';
// import Pharmacy from './old/components/pharmacyComponent/Pharmacy';


const queryClient = new QueryClient()

function App() {
  return ( 
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Router>  
          <Routes>    
            <Route path='/' element={<LoginScreen />}/> 
            <Route path='/resetpassword' element={<ResetPassword />}/> 
            <Route path='/newpassword' element={<NewPassword />}/> 
            {/* <Route path='/doctor' element={<DoctorScreen />}>
              <Route path='/doctor' element={<Doctor />} />
              <Route path='/doctor/patientprofile' element={<PatientProfile />} /> 
            </Route> */}
            <Route path='/dashboard' element={<DashboardScreen />}> 
              <Route path='/dashboard' element={<DashboardTab />} />
              <Route path='/dashboard/registerpatient' element={<RegisterPatient />} />
              <Route path='/dashboard/managescan' element={<ManageScan />} />
              <Route path='/dashboard/manageuser' element={<AddNewUser />} />
              <Route path='/dashboard/managebloodbank' element={<ManageBloodBank />} />
              <Route path='/dashboard/managepatient' element={<ManagePatient />} />
              <Route path='/dashboard/patientfile' element={<PatientFile />} />
              <Route path='/dashboard/pharmacy' element={<PharmacyTab />} />
              <Route path='/dashboard/doctor' element={<DoctorScreen />}>
                <Route path='/dashboard/doctor' element={<DoctorTab />} />
                <Route path='/dashboard/doctor/continuationsheet' element={<ContinuationSheet />} />
                <Route path='/dashboard/doctor/managecontinuationsheet' element={<ManageContinuationSheet />} />
                <Route path='/dashboard/doctor/makingrequest' element={<MakingRequest />} />
              </Route>
            </Route>  
          </Routes>
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
