
export function paintTicks(uTime: number): JSX.Element[] {
  const divs = [];
  const count: number = 200;
  //const waveSize: number = 12;

  let selectedIndex = Math.floor(((uTime % 600) / 600) * count);

  for (let i = 0; i < count; i++) {

    // TODO: fix wave function
    // console.log(`selectedIndex: ${selectedIndex}, i: ${i}, distance: ${Math.min(Math.abs(selectedIndex - i), Math.abs(selectedIndex + count - i))}`)
    //let iFromIndex: number = Math.min(Math.abs(selectedIndex - i), Math.abs(selectedIndex + count - i))

    let additionalHeight: number = 0;

    // additionalHeight = (iFromIndex < waveSize) ? Math.pow(Math.cos(iFromIndex * (Math.PI / 2) * (1 / waveSize)), 2) * 10 : 0
    //let elementHeight: number = additionalHeight + 10
    // let heightString: string = elementHeight.toString() + 'px';

    let heightString: string = (selectedIndex === i) ? '30px' : '10px'
    additionalHeight = (selectedIndex === i) ? 15 : 0;


    divs.push(
      <div
        key={i}
        className="mark"
        style={{ transform: `rotate(${360 * i / count + 180}deg) translateY(${142 - additionalHeight * 0.5}px)`, height: `${heightString}` }}
      >
      </div>
    );
  }
  return divs;
}


interface FormattedTime {
  min: string;
  sec: string;
  u: string;
}

export function formatTime(uTime: number): FormattedTime {
  let minutes: number = 0;
  let seconds: number = 0;
  let remainder: number = 0;

  minutes = Math.floor(uTime / 6000)
  remainder = uTime % 6000
  let minStr = convertToTwoDigits(minutes)

  seconds = Math.floor(remainder / 100)
  let secStr = convertToTwoDigits(seconds)

  remainder = remainder % 100
  let remainStr = convertToTwoDigits(remainder)

  return {
    min: minStr,
    sec: secStr,
    u: remainStr
  }
}


export function convertToTwoDigits(uTime: number): string {
  return uTime < 10 ? `0${uTime}` : `${uTime}`;
}
