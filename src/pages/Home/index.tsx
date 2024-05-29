import React from 'react';
import LandingScreen from './components/LandingScreen';
import Screen2 from './components/Screen2';
import { Screen3 } from './components/Screen3';
import './components/home.css';

const HomePage = () => {
  return (
    <div className=" h-full space-y-7">
      <LandingScreen />
      <Screen2 />
      <Screen3 />
    </div>
  );
};

export default HomePage;
