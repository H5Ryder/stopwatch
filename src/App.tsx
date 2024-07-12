import React, { useState, useEffect } from 'react';
import './stopwatch.css';
import Stopwatch from './components/Stopwatch';
import LapDisplay from './components/LapDisplay';


interface LapData {
  uTime: number;
  lap: number;
}

function App() {
  const [lapData, setLapData] = useState<LapData[]>([]);

  const addLap = (uTime: number) => {
    let prev = 0;
    if (lapData.length > 0) {
      prev = lapData[lapData.length - 1].uTime;
    }

    const split = uTime - prev;

    const newDataPoint: LapData = {
      uTime: uTime,
      lap: split,
    };

    const copyArray: LapData[] = [...lapData];
    copyArray.push(newDataPoint);

    setLapData(copyArray);
  };

  const resetLapData = () => {
    setLapData([])
  }

  const lastLap = lapData.length > 0 ? lapData[lapData.length - 1].lap : undefined;

  useEffect(() => {
    console.log(lapData)
  }, [lapData])

  return (
    <>

      <div className='left-panel'>
        <Stopwatch lastLap={lastLap} addLap={addLap} resetLapData={resetLapData} />
      </div>

      <div className='right-panel'>
        <LapDisplay lapData={lapData} />
      </div>
    </>
  );
}

export default App;

