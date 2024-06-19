
//import './App.css';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import SignIn from './components/Login/SignIn';
import Login from './components/Login/Login';
import Flights from './components/Flights/Flights';
import FlightOverview from './components/FlightOverview/FlightOverview';
import Seats from './components/FlightOverview/Seats';
import Payment from './components/Payment/PaymentFe';
import { useEffect } from 'react';
// import Booking from './components/Booking/Booking';
// import CompanyProfile from './components/CompanyProfile/CompanyProfile';
import Travel from './components/Travel/Travel';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="">
      
      
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        {/* <Route exact path="/" element={<CompanyProfile/>}/> */}
        <Route exact path="/Login" element={<Login/>}/>
        {/* <Route exact path='/booking' element={<Booking/>}/> */}
        <Route exact path='/seats' element={<Seats/>}/>
        <Route exact path='/flights/one' element={<FlightOverview/>}/>
        {/* <Route exact path='/payment' element={<Payment amount={400}/>}/> */}
        <Route exact path="/SignIn" element={<SignIn/>} />
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/flights' element={<Flights/>}/>
        <Route exact path='/travel' element={<Travel/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
