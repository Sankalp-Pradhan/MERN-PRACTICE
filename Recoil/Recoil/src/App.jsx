import React from 'react';
import { counterAtom } from './store/atoms/counter'
// import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  )
}
function Counter() {

  return <div>
    <CurrentCount />
    <Increase />
    <Decrease />
  </div>
}

function CurrentCount() {
  const count = useRecoilValue(counterAtom);
  return <div>
    {count}
  </div>
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom)
  function Decrease() {
    setCount(c => c - 1);
  }
  return <div>
    <button onClick={Decrease}>Decrease</button>
  </div>
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom)
  function Increase() {
    setCount(c => c + 1);
  }
  return <div>
    <button onClick={Increase}>Increase</button>
  </div>
}
export default App
