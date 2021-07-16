import React from 'react'
import {useAge} from "../context/age"

export default function Agedown() {
    const {dispatch} = useAge()
    const state = useAge()
    console.log(state.state.age)
    return (
        <div>
            <p>{state.state.age}</p>
            <button onClick={()=> dispatch({type: "decrease"})}>Down</button>
            <button onClick={()=> dispatch({type: "increase"})}>Up</button>
        </div>
    )
}
