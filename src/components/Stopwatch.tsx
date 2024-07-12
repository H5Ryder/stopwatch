import { useState, useEffect } from 'react'
import '../stopwatch.css'
import { convertToTwoDigits, paintTicks, formatTime } from '../utils/utils.jsx';

interface StopwatchProps {
  lastLap?: number;
  addLap: (uTime: number) => void;
  resetLapData: () => void;
}


const Stopwatch: React.FC<StopwatchProps> = ({ lastLap = 0, addLap, resetLapData }) => {

  const [countOn, setCountOn] = useState(false)
  const [elapsed, setElapsed] = useState(0)

  const date = new Date()

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (countOn) {
      interval = setInterval(() => setElapsed(prev => prev + 1), 10)
    }

    return () => clearInterval(interval);
  }, [countOn]);



  const clickStart = () => {
    setCountOn(!countOn);
  }

  const clickReset = () => {
    resetLapData()
    setCountOn(false)
    setElapsed(0)
  }

  const clickLap = () => {

    if (countOn) addLap(elapsed)

  }

  return (
    <>

      <div className='btn btn-start' onClick={clickStart}>
        <p>start</p>
      </div>
      <div className='btn btn-reset' onClick={clickReset}>
        <p>reset</p>
      </div>

      <div className='btn btn-lap' onClick={clickLap}>
        <p>lap</p>
      </div>

      <div className="clock">

        {paintTicks(elapsed)}
        <div className={`start-stop ${countOn ? 'play' : 'pause'}`}>

          <div className="sqr-i">
          </div>
          <div className="sqr-ii">
          </div>
          <div className="sqr-x">
          </div>
          <div className="sqr-xx">
          </div>
        </div>


        <h3 className="time">{`${convertToTwoDigits(date.getHours())}:${convertToTwoDigits(date.getMinutes())}`}</h3>

        <div className="current-time">
          <h1 className="seconds">{`${formatTime(elapsed).min}:${formatTime(elapsed).sec}`}</h1>
          <p className="f-seconds">{formatTime(elapsed).u}</p>
        </div>

        <div className="last-lap-time">
          <h1 className="seconds">{`${formatTime(lastLap).min}:${formatTime(lastLap).sec}`}</h1>
          <p className="f-seconds">{formatTime(lastLap).u}</p>
        </div>

      </div>




    </>
  )
}

export default Stopwatch

