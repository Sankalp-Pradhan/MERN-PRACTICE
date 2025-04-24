import { useEffect, useState } from "react";
import { useFetch, usePostTitle } from "./hooks/useFetch";
import { usePrev } from "./hooks/use-prev";



function App() {
    // const [currentPost, setCurrentPost] = useState(1);
    // const { finalData } = useFetch("https://jsonplaceholder.typicode.com/todos/" + currentPost);

    // return (
    //     <div>
    //         <button onClick={()=>setCurrentPost(1)}>1</button>
    //         <button onClick={()=>setCurrentPost(2)}>2</button>
    //         <button onClick={()=>setCurrentPost(3)}>3</button>
    //         {JSON.stringify(finalData)}
    //     </div >
    // )

    // const [state, setState] = useState(0);
    // const prev = usePrev(state);
    function useDebounce(orignalFn){
        const currentClock = useRef();

        const fn = () =>{
            clearTimeout(currentClock.current);
            currentClock.current = setTimeout(orignalFn,30);
        }
        return fn
    }

    function sendDataToBackend() {
        fetch("api.amazon.com/search/")
    }
  
    return (

        //     <p>{state}</p>
        //     <button on onClick={() => {
        //         setState((curr) => curr + 1 );
        //     }}>
        //         fuck me ohh sorry Click me
        //     </button>
        //     <p>The previous value was{prev}</p>

        <>
            <input type="text" onChange={debounceFn} />
        </>

    )
}



export default App
