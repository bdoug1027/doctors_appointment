import { Routes, Route } from "react-router-dom";
import MainNavbar from "./components/shared/MainNavbar";
import Footer from "./components/shared/Footer";
import Home from './components/shared/Home';
import Doctors from "./components/doctors/Doctors";
import Users from "./components/users/Users";
import Nomatch from "./components/shared/Nomatch";
import UserShow from "./components/users/UserShow";
import DoctorShow from "./components/doctors/DoctorShow";
import Appointments from "./components/appointments/Appointments"

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/doctors' element={ <Doctors /> } />
      <Route path='/doctors/:doctorId' element={ <DoctorShow /> } />
      <Route path='/:doctorId/appointments' element={ <Appointments /> } />
      <Route path='/users' element={ <Users /> } />
      <Route path='/users/:userId' element={ <UserShow /> } />
      <Route path='*' element={ <Nomatch /> } />
    </Routes>
    <Footer />
  </>
)

export default App;