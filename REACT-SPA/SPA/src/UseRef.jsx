import { useState } from "react"

function App() {
  const [currentCount, setCurrentCount] = useState(1);
  const [timer, setTimer] = useState(1);


  function StartClock() {
  let  value = setInterval(function () {
      setCurrentCount(c => c + 1);
    }, 1000);
    setTimer(value);
  }

  function stopClock(){
    clearInterval(timer)
  }
  return <div>
    {currentCount}
    <br />
    <button onClick={StartClock}>Start</button>
    <button onClick={stopClock} >Stop</button>
  </div>
}


export default App
