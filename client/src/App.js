
import CardComparison from './components/CardComparison';
import CardProvider from './components/CardProvider';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import CallToAction from './components/CallToAction';
import ContactPage from './pages/ContactPage';
import InnerPage from './pages/InnerPage'
import InnerContact from './pages/InnerContact';
import CreditCardForm from './components/AdminDash/CreditCardForm';
import AdminPage from './components/AdminDash/AdminPage';
import ViewCards from './components/AdminDash/ViewCards';
import Member from './components/membership/Member';






function App() {

  return (
   <Router>
    <Routes>
      <Route exact path='/' element={<LandingPage/>}/>
      <Route exact path='/compare-card' element={<CardComparison/>}/>
      <Route exact path='/nav' element={<Navbar/>}/>
      <Route exact path='/contact' element={<ContactPage/>}/>
      <Route exact path='/inner-page/:catergory'element={<InnerPage/>}/>
      <Route exact path='/innerContact'element={<InnerContact/>}/>
      <Route exact path='/add-cards' element={<CreditCardForm/>}/>
      <Route exact path='/admin' element={<AdminPage/>}/>
      <Route exact path='/view' element={<ViewCards/>}/>
      <Route exact path='/member' element={<Member/>}/>
      <Route exact path='/call' element={<CallToAction/>}/>
    </Routes>
   </Router>
     


  
  

  );
}

export default App;

