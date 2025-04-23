import { useRef } from "react"
function App() {

  const inputref = useRef();
  const [value, SetValue] form 

  function focusOn() {
    inputref.current.focus();
  }
  return <div>
    Signup
    <input ref={inputref} type="text" name="name" />
    <input type="text" name="name" />
    <button onClick={focusOn}>Submit</button>
  </div>
}


export default App
