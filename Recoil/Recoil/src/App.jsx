import { useEffect, useState ,memo } from 'react'
import './App.css'

function App() {

  return (
    <>
      <Counter />
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(c => c + 1)
     }, 3000);
  }, [])
  return <div>
    <memoizedCurrentCount/>
    <Increase />
    <Decrease />
  </div>
}
const memoizedCurrentCount = memo(CurrentCount);
function CurrentCount() {
  return <div>
    dfghj
  </div>
}

const Decrease = memo(function () {


  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
})


const  Increase = memo(function () {
  return <div>
    <button onClick={increase}>Increase</button>
  </div>
})

export default App


