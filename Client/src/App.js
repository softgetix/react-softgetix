import React from "react";
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './main/home/Index';
import Career from './main/career/Index';
import Team from './main/team/Index';
import AboutUs from './main/about/About';
import Contact from './main/contact/Contact';
import Services from "./main/services/Services";
import ProductEngineering from "./main/services/ProductEngineering";
import StartupSoftware from "./main/services/StartupSoftware";
import DigitalTransformation from "./main/services/DigitalTransformation";
import EnterpriseServices from "./main/services/EnterpriseServices";
import GetFreeQuote from "./main/common_components/GetFreeQuote";
import Staffing from "./main/staffing/Staffing";   


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/career' exact element={<Career />} />
          <Route path='/team' exact element={<Team />} />
          <Route path='/about' exact element={<AboutUs />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/services' exact element={<Services />} />
          <Route path='/product_engineering' exact element={<ProductEngineering />} />
          <Route path='/startup_software' exact element={<StartupSoftware />} />
          <Route path='/digital_transformation' exact element={<DigitalTransformation />} />
          <Route path='/enterprise_services' exact element={<EnterpriseServices />} />
          <Route path='/getFreeQuote' exact element={<GetFreeQuote />} />
          <Route path='/staffing' exact element={<Staffing />} />

        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
