import React from 'react'
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from '../Pages/Home'
import RedbullFeatures from '../Pages/RedbullFeatures'
import Navbar from '../Pages/Navbar'
import KtmNaked from '../Pages/KtmNaked'
import KtmAdvanture from '../Pages/KtmAdvanture'
const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/redbull-collection" element={<RedbullFeatures  />} />
    <Route path="/models/ktm-naked" element={<KtmNaked  />} />
    <Route path="/models/ktm-advanture" element={<KtmAdvanture  />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
