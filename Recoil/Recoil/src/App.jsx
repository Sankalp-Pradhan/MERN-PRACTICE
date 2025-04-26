import { memo, useEffect, useState } from "react"
import { RecoilRoot, RecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { counterAtom, evenSelector } from "./store/atoms/counter"

function App() {
  return <div>
    <RecoilRoot>
      <Button />
      <Counter />
      <IsEven />
    </RecoilRoot>
  </div>
}

function Button() {
  const setCount = useSetRecoilState(counterAtom)

  function Increase() {
    setCount(c = c + 1)
  }

  function Decrease() {
    setCount(c = c - 1)
  }

  return <div>
    <button onClick={Increase}>Increase</button>
    <button onClick={Decrease}>Decrease</button>
  </div>
}

function Counter() {
  const count = useRecoilValue(counterAtom);
  return <div>
    {count}
  </div>
}
function IsEven() {
  const even = useRecoilValue(evenSelector)
  return <div>
    {even ? 'Even ' : "Odd"}
  </div>
}

export default App;