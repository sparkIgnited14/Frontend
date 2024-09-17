import { useState } from 'react'
import Nav from './nav'
import Events from './components/events';
import Gallery from './components/gallery';
import Team from './components/team';
import Contact from './components/contact';
import Vehicles from './components/Vehicles.';
import Feedback from './components/feedback';
import AdminQueries from './components/query/AdminQueries';
import SubmitQuery from './components/query/queryForm';
import './App.css'



// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';

import ReviewPage from './components/review/ReviewPage';
import ETWDCEvent from './components/events/ETWDC';
import SIEPEvent from './components/events/SEIP';

import VehicleDetail from './components/VehicleDetail';


import ScrollToTop from './components/ScrollToTop';


function App() {


  return (
    <>
     
      <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nav" element={<Nav />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bikeInfo" element={<Vehicles />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/admin" element={<AdminQueries />} />
          <Route path="/query" element={<SubmitQuery />} />
        <Route path="/reviewpage" element={<ReviewPage />} />
        <Route path="/etwdc-event" element={<ETWDCEvent />} />
        <Route path="/siep-event" element={<SIEPEvent />} />
        <Route path="/vehicle/:vehicleId" element={<VehicleDetail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
