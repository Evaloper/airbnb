import { useState } from 'react';
import React from 'react';
import ReactDOM  from 'react-dom';
import { Outlet, Link } from 'react-router-dom';
import FirstSection from './Home';
import './App.css';

function HomePage(){
  return(
    <FirstSection />
  )
}

export default HomePage;

