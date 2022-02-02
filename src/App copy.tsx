import React, { useState } from 'react';
import { Color } from './Components/Color';
import { Power } from './Components/Power';
import { Warp } from './Components/Warp';
import { Option } from './Components/Option';
import './App.css';
import { Total } from './Components/Total';


function App() {



  type TotalProps = {
    totals: {
      basePrice: number
      colorPrice: number
      powerPrice: number
      warpPrice: number
      optionPrice: number
    }[]
  }

  const optionPackageList = [
    {
      title: 'Basic',
      price: 0,
      includes: ['Air conditioning','Cloth seats','Fm radio']
    },
    {
      title: "Sport",
      price: 100,
      includes: ['Air conditioning','Cloth seats','Fm radio','Personal tech support']
    },
    {
      title: "Lux",
      price: 500,
      includes: ['Air conditioning','Luxury seats','Fm radio','Chrome weels','Window tint','Subwoofer']
    }
  ]

  const warpDrive = [
    {
      title: 'No',
      price: 0
    },
    {
      title: "YES",
      price: 1000
    }
  ]
  const powerList = [
    {
      title: '100 MW',
      price: 0
    },
    {
      title: "150 MW",
      price: 200
    },
    {
      title: "200 MW",
      price: 500
    } 
  ]
  const colorList = [
    {
      title: 'Snow',
      price: 0,
    },
    {
      title: "Volcano",
      price: 100
    },
    {
      title: "Sky",
      price: 100
    }
  ]



  const [nameState, setNameState] = useState('tere');

    
  
  return (
    <div className="App-container">
       {/* set line around and everything inside of it */}
      <div className='flex-item'>
      <h1>hello there {nameState}</h1>


        <p className='heading-text'>Spaceship configurator</p>
        <div className='container'>
        <div className='element'><Color colors={colorList}/></div>
        <div className='element'><Power powers={powerList} /></div>
        </div>
        <Warp warpDrive={warpDrive} />
        <Option options={optionPackageList} />


        
        </div>
    </div>
  );
}
export default App;
