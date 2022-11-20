import { useState } from "react";
function Counter(){
    const [count, setCount] =useState(1)
    function incr(){
        setCount(
            function(oldCount){
                return oldCount +1
            }
        )
        console.log(count)
    }
    function restart(){
        setCount(
            function(oldCount){
                return 1
            }
        )
        console.log(count)
    }
    return (
        <div>
            <h1>Counter</h1>
            <p>Counter is at {count}</p>
            <button onClick={incr}>Click to add 1 to counter</button>
            <button onClick={restart}>Click to restart counter</button>

        </div>

    )
}
export default Counter;