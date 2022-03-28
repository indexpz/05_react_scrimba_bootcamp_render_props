import React from "react"
import Example from "./Example"

function App() {
    return (
        <div>
            <Example render={(boll, number)=>{
                return (
                    <div>
                        <h1>{boll? "Trzeba wstać do roboty" : "Można spać"}</h1>
                        <h1>{number}</h1>
                    </div>
                   )
            }

            }/>
        </div>
    )
}

export default App