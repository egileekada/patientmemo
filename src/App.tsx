import { ChakraProvider } from '@chakra-ui/react'; 
import React from 'react';  
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';    
import LoginScreen from './screens/LoginScreen';
import NewPassword from './screens/NewPassword'; 
import ResetPassword from './screens/ResetPassword'; 
import DashboardScreen from './screens/DashboardScreen';
import DashboardTab from './Tabs/DashboardTab'; 
import RegisterPatient from './components/dashboardComponent/RegisterPatient';
import ManageScan from './components/laboratoryComponent/ManageScan';
import AddNewUser from './components/dashboardComponent/AddNewUser';
import ManageBloodBank from './components/dashboardComponent/ManageBlood';
import ManagePatient from './components/dashboardComponent/ManagePatient';
import PatientFile from './components/dashboardComponent/PatientFile'; 
import { 
    QueryClient,
    QueryClientProvider,
  } from 'react-query' 
  import PharmacyTab from './Tabs/NewPharmacyTab';
import DoctorScreen from './screens/DoctorScreen';
import DoctorTab from './Tabs/DoctorTab';
import ContinuationSheet from './components/doctorComponent/ContinuationSheet';
import MakingRequest from './components/doctorComponent/MakingRequest';
import ManageContinuationSheet from './components/doctorComponent/ManageContinuationSheet';
import LaboratoryTab from './Tabs/LaboratoryTab'; 
import NurseTab from './Tabs/NurseTab';
import NurseScreen from './screens/NurseScreen';
import MedicationSheet from './components/nurseComponent/MedicationSheet';
import ProfileTab from './Tabs/ProfileTab';
import ObservationChart from './components/nurseComponent/ObservationChart';
import OIChart from './components/nurseComponent/OIChart';
import LabScreen from './screens/LabScreen';
import ManageActivities from './components/laboratoryComponent/ManageActivities';
import DeliveryRecord from './components/nurseComponent/DeliveryRecord'; 
import AnteNatalNotes from './components/nurseComponent/AnteNatalNotes';
import DispenseDrugs from './components/pharmacyComponent/DispenseDrugs';
import PatientFileOther from './components/PatientFileOther';
import Chat from './components/Chat';
import ExpiredDrugs from './components/pharmacyComponent/ExpiredDrugs';
import DispenseHistory from './components/pharmacyComponent/DispenseHistory';
 
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
            <Route path='/' element={<LoginScreen />}/> 
            <Route path='/resetpassword' element={<ResetPassword />}/> 
            <Route path='/newpassword' element={<NewPassword />}/>  
            <Route path='/dashboard' element={<DashboardScreen />}> 
              <Route path='/dashboard' element={<DashboardTab />} />
              <Route path='/dashboard/registerpatient' element={<RegisterPatient />} />
              {/* <Route path='/dashboard/managescan' element={<ManageScan />} /> */}
              <Route path='/dashboard/manageuser' element={<AddNewUser />} />
              <Route path='/dashboard/managepatient' element={<ManagePatient />} />
              <Route path='/dashboard/patientfile' element={<PatientFile />} />
            </Route>  
              <Route path='/dashboard/pharmacy' element={<PharmacyTab />} />
              <Route path='/dashboard/laboratory' element={<LabScreen />}>
                <Route path='/dashboard/laboratory' element={<LaboratoryTab />} /> 
                <Route path='/dashboard/laboratory/activities' element={<ManageActivities />} />
                <Route path='/dashboard/laboratory/managescan' element={<ManageScan />} />
                <Route path='/dashboard/laboratory/managebloodbank' element={<ManageBloodBank />} />
              </Route>
              <Route path='/dashboard/doctor' element={<DoctorScreen />}>
                <Route path='/dashboard/doctor' element={<DoctorTab />} />
                <Route path='/dashboard/doctor/continuationsheet' element={<ContinuationSheet />} />
                <Route path='/dashboard/doctor/managecontinuationsheet' element={<ManageContinuationSheet />} />
                <Route path='/dashboard/doctor/makingrequest' element={<MakingRequest />} />
              </Route>
              <Route path='/dashboard/nurse' element={<NurseScreen />} > 
                <Route path='/dashboard/nurse' element={<NurseTab />} />
                <Route path='/dashboard/nurse/medicationsheet' element={<MedicationSheet />} />
                <Route path='/dashboard/nurse/observationchart' element={<ObservationChart />} />
                <Route path='/dashboard/nurse/oichart' element={<OIChart />} />
                <Route path='/dashboard/nurse/managedeliveryrecord' element={<DeliveryRecord />} />
                <Route path='/dashboard/nurse/antenatalnotes' element={<AnteNatalNotes />} />
              </Route>
              <Route path='/patientfile' element={<PatientFileOther />} />
              <Route path='/pharmacy/dispensedrugs' element={<DispenseDrugs />} />
              <Route path='/pharmacy/expireddrugs' element={<ExpiredDrugs />} />
              <Route path='/pharmacy/dispensehistory' element={<DispenseHistory />} />
              <Route path='/chat' element={<Chat />} /> 
              <Route path='/dashboard/profile' element={<ProfileTab />} />
                <Route path='/dashboard/findpatient' element={<NurseTab />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
