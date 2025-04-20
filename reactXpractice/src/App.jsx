import { useState, useEffect } from "react";

//conditonal rendering
function App() {
  let [countVisible, setCountVisible] = useState(true);

  useEffect(function () {
    setInterval(() => {
      setCountVisible(c => !c)
    }, 5000);
  },[])

  return <div>
    hii
    {/* {countVisible ? <Counter></Counter> : null} //this is by using ternery operator same thing is below */}
    {countVisible && <Counter></Counter>}
    hello
  </div>
}
//mounting ,rendering , unmounting
function Counter() {
  const [count, setCount] = useState(0);

  //hooking into the lifecycle events of react
  console.log("this will come every time it re-renders")
  // wraping your function inside a setEffect it make sures your functions runs only once no matter how many times it re-renders
  useEffect(function () {
    setInterval(function () {
      setCount(count => count + 1)
    }, 1000)
    console.log("this will come once no matter how many time it re-renders")

  }, []);

  // setInterval(function(){
  //   setCount(count + 1)
  // },1000)

  function increaseCount() {
    setCount(count => count + 1);
  }

  return <div>
    <div id="text">{count}</div>
  </div>

}
export default App