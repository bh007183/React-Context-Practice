import React, {useState} from 'react'
import {useNameContext} from "../context/names"

export default function ManageName() {
    const [name, setName] = useState('')
    const {dispatch} = useNameContext()

    const addName = () => {
        dispatch({type: "name", payload: name})
    }
    const handleChange = event => {
        
        setName(event.target.value)
    }
    const removeName = event => {
        dispatch({type: "haspet", payload: name})
    }
    return (
        <div>
            <input onChange={handleChange} value={name} ></input>
            <button onClick={addName}>enter name</button>    
            <button onClick={removeName}>Add Pet</button>        
        </div>
    )
}
