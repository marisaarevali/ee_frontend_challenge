import React from 'react';
import { Color } from './Components/Color';
import { Total } from './Components/Total';
import { Power } from './Components/Power';
import { Warp } from './Components/Warp';
import { Option } from './Components/Option';
import './App.css';


function App() {
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

  const optionPackageList = [
    {
      title: 'Basic',
      price: 0,
      includes: ['Air conditioning', 'Cloth seats', 'Fm radio']
    },
    {
      title: "Sport",
      price: 100,
      includes: ['Air conditioning', 'Cloth seats', 'Fm radio', 'Personal tech support']
    },
    {
      title: "Lux",
      price: 500,
      includes: ['Air conditioning', 'Luxury seats', 'Fm radio', 'Chrome weels', 'Window tint', 'Subwoofer']
    }
  ]



  return (

    <div className='border'>
    <div className="wrapper">
      
        <div className='box title'>Spaceship configurator</div>
        <div className='box colorTitle'>Select color:</div>
        <div className='box color'><Color colors={colorList} /></div>
        <div className='box total'><Total /></div>
        <div className='box powerTitle'>Select power:</div>
        <div className='box power'><Power powers={powerList} /></div>
        <div className='box warpTitle'>Warp drive:</div>
        <div className='box warp'><Warp warpDrive={warpDrive} /></div>
        <div className='box optionOptTitle'>Select option package:</div>
        <div className='box option'><Option options={optionPackageList} /></div>
        
    </div>
    </div>
  );
}
export default App;
