import { ChakraProvider } from '@chakra-ui/react'; 
import React from 'react';  
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';  
import NewPassword from './screens/NewPassword'; 
import ResetPassword from './screens/ResetPassword';   
import { 
    QueryClient,
    QueryClientProvider,
  } from 'react-query' 
  import PharmacyTab from './screens/NewPharmacyTab'; 
import NurseTab from './screens/StaffWelcomePage'; 
import ProfileTab from './screens/ProfileTab'; 
import DispenseDrugs from './components/pharmacyComponent/DispenseDrugs';
import PatientFileOther from './screens/PatientInformation';
import Chat from './screens/StaffChat';
import ExpiredDrugs from './components/pharmacyComponent/ExpiredDrugs';
import DispenseHistory from './components/pharmacyComponent/DispenseHistory';
import StockHistory from './components/pharmacyComponent/StockHistory';
import ChatAdmin from './screens/AddChat'; 
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import DashboardPage from './components/DashboardScreen/DashboardPage';
import ManagePatient from './components/DashboardScreen/ManagePatient';
import ManageStaff from './components/DashboardScreen/ManageStaff';
import RegisterPatient from './components/DashboardScreen/RegisterPatient';
import ProfileTabAdmin from './components/DashboardScreen/ProfileTabAdmin';
import PatientInformation from './screens/PatientInformation'; 
 
const queryClient = new QueryClient()

function App() { 

  React.useEffect(() => {
    fetch(`https://www.universal-tutorial.com/api/getaccesstoken`, {
      method: 'GET', // or 'PUT'
      headers: {
          "Accept": "application/json",
          "api-token": "V1mhwD-iZGLntVICiPhQfxRIhGpJ1xcokq0xZiMbq9YfK2VcXy0EikVGhfxI6RH-RLE",
          "user-email": "egileoniso.ekada@gmail.com"
      }
  })
  .then(response => response.json())
  .then(data => {   
        localStorage.setItem('country-token', data.auth_token) 
    })
    .catch((error) => {
        console.error('Error:', error); 
    });   
  },)

  return ( 
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Router>  
          <Routes>    
            {/* <Route path='/' element={<LoginScreen />}/>  */}
            <Route path='/' element={<Login />}/> 
            <Route path='/resetpassword' element={<ResetPassword />}/> 
            <Route path='/newpassword' element={<NewPassword />}/>  
            <Route path='/dashboard' element={<Dashboard />}> 
              <Route path='/dashboard' element={<DashboardPage/>} />
              <Route path='/dashboard/registerpatient' element={<RegisterPatient />} />
              {/* <Route path='/dashboard/managescan' element={<ManageScan />} /> */}
              <Route path='/dashboard/manageuser' element={<ManageStaff />} />
              <Route path='/dashboard/managepatient' element={<ManagePatient />} />
              <Route path='/dashboard/adminprofile' element={<ProfileTabAdmin />} />
              <Route path='/dashboard/patientfile' element={<PatientInformation />} />
            </Route>  
              <Route path='/dashboard/pharmacy' element={<PharmacyTab />} />
              {/* <Route path='/dashboard/laboratory' element={<LabScreen />}>
                <Route path='/dashboard/laboratory' element={<LaboratoryTab />} /> 
                <Route path='/dashboard/laboratory/activities' element={<ManageActivities />} />
                <Route path='/dashboard/laboratory/managescan' element={<ManageScan />} />
                <Route path='/dashboard/laboratory/managebloodbank' element={<ManageBloodBank />} />
              </Route>  */}
              <Route path='/patientfile' element={<PatientInformation />} />
              <Route path='/pharmacy/dispensedrugs' element={<DispenseDrugs />} />
              <Route path='/pharmacy/expireddrugs' element={<ExpiredDrugs />} />
              <Route path='/pharmacy/dispensehistory' element={<DispenseHistory />} />
              <Route path='/pharmacy/stockhistory' element={<StockHistory />} />
              <Route path='/chat' element={<Chat />} /> 
              <Route path='/admin-chat' element={<ChatAdmin />} /> 
              <Route path='/dashboard/profile' element={<ProfileTab />} />
                <Route path='/dashboard/findpatient' element={<NurseTab />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
