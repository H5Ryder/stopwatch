import '../stopwatch.css'
import '../LapDisplay.css'
import { formatTime } from '../utils/utils.js';
import DownloadBtn from './DownloadBtn.js';

interface LapData {
  uTime: number;
  lap: number;
}

interface LapDisplayProps {
  lapData: LapData[];
}

const LapDisplay: React.FC<LapDisplayProps> = ({ lapData }) => {


  function ItemList(): JSX.Element {
    return (
      <div className='data-table'>

        <DownloadBtn/>
        <div className='data-header'>
          <div> <p>Time</p> </div>
          <div> <p> Lap</p></div>
        </div>
        <div className='data-elements'>

          {lapData.map((item, index) => (
            <div key={index} className="data-row">

              <div className="data-current-time">
                <h1 className="d-seconds">{`${formatTime(item.uTime).min}:${formatTime(item.uTime).sec}:${formatTime(item.uTime).u}`}</h1>
              </div>

              <div className="data-lap-time">
                <h1 className="d-seconds">{`${formatTime(item.lap).min}:${formatTime(item.lap).sec}:${formatTime(item.lap).u}`}</h1>
              </div>

            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="lap-display">

      {ItemList()}
    </div>
  );
};

export default LapDisplay;
