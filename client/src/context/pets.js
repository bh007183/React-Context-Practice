import * as React from 'react'

const PetContext = React.createContext({
    name: []
})

function petReducer(state, action){
    
    switch (action.type) {
        case "addname":{
            return {name: [...state.name, action.payload] }
        }
        case "removename":{
            return {name: state.name.filter(item => item !== action.payload)}
        }
    
        default: 
            throw new Error(`unhandled action type: ${action.type}`)
        
          
    }

}

function PetProvider({children}){
    const [state, dispatch] = React.useReducer(petReducer, {name: []})
    const value = {state, dispatch}
    return <PetContext.Provider value={value}>{children}</PetContext.Provider>
}

function usePetContext(){
    const context = React.useContext(PetContext)
    if(context === undefined){
        throw new Error('usePetContext must be used within PetProvider')
    }
    return context
}

export {PetProvider, usePetContext}
