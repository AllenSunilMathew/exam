import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import './App.css'
import Header from './Compoenets/Header';
import MainLayout from './Compoenets/MainLayout';
import Hero from './Compoenets/Hero';

function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={<Hero />} />
        
      </Routes>
    </>
  )
}

export default App
