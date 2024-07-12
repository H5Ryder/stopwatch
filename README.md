# React + TypeScript + Vite Stopwatch

Live Demo: https://stopwatch-iy2r.vercel.app/

To run use the following commands:

```
npm install
npm run dev
```

Functionality:
- Start/Stop
- Lap
- Reset
- Save image of recorded laptimes

Todo:
- REACT:
- time updating 100fps - too many re-renders -> Increase interval time
- Add elements that don't update often to a separate component
- Fix sine wave function made on blue markings around circumference of watch (to have a wave effect), commented out for now
- "00:00" individual digits chars don't share same width, when time updates the string changes width causing shifting -> change font or split up characters
- CSS:
- Make mobile friendly
- Remove hardcoded values

