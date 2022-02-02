import React from 'react';
import { Color } from './Components/Color';
import { Total } from './Components/Total';
import './App.css';
import { Power } from './Components/Power';
import { Warp } from './Components/Warp';
import { Option } from './Components/Option';



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
    <div className="App-container">
      {/* set line around and everything inside of it */}
      <div className='flex-item'>

        <Color colors={colorList} />
        <Power powers={powerList} />
        <Warp warpDrive={warpDrive} />
        <Option options={optionPackageList} />
        <Total />
      </div>
    </div>
  );
}
export default App;
