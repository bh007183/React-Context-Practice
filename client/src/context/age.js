import * as React from "react"

const AgeContext = React.createContext({
    age: ""
})

function ageReducer(state, action){
    switch (action.type) {
        case "increase":
            return {age: state.age++}
            
            
        case "decrease":
            return {age: state.age--}
    
        default:
            throw new Error("error in ageReducer")
    }
}

function AgeProvider({children}){
    const [state, dispatch] = React.useReducer(ageReducer, {age: ''})
    const value = {state, dispatch}

return <AgeContext.Provider value={value}>{children}</AgeContext.Provider>
}

function useAge(){
    const context = React.useContext(AgeContext)
    if(context === undefined){
        throw new Error("useAge must be used in AgeProvider")
    }
    return context
}
export {AgeProvider, useAge}