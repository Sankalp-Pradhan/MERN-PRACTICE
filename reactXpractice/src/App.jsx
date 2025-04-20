import { useState , useEffect } from "react";

function App() {
  return <div>
    <Counter></Counter>
  </div>
}
//mounting ,rendering , unmounting
function Counter() {
  const [count, setCount] = useState(0);

  //hooking into the lifecycle events of react

    setInterval(function(){
      setCount(count + 1)
    },1000)


    // setInterval(function(){
    //   setCount(count + 1)
    // },1000)

    function increaseCount() {
      setCount(count => count + 1);
    }
  
    return <div>
    <div id="text">{count}</div>
    <button onClick={increaseCount}>Increase Count</button>
    <button onClick={decreaseCount}>decrease Count</button>
    <button onClick={resetCount}>reset Count</button>
  </div>

}
export default App