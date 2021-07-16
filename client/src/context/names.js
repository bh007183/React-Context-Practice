import * as React from 'react'

const NameContext = React.createContext({
    combinedName: [],
    test: {}
})

function nameReducer(state, action){
    switch (action.type) {
        case "name":
            return {combinedName: [...state.combinedName, action.payload]}
        case "haspet":

        let arr = state.combinedName.map((item, index) => {
           
            if(index === state.combinedName.indexOf(action.payload)){
                let obj = {
                    firstName: item.split(" ")[0],
                    lastName: item.split(" ")[1],
                    pet: true
                }
                return obj
            }else{
                let obj = {
                    firstName: item.split(" ")[0],
                    lastName: item.split(" ")[1]
                }
                return obj
            }
        })
            return {combinedName: arr}
        default:
            throw new Error(`unhandled action type: ${action.type}`)
    }
} 

function NameProvider({children}){
    const [state, dispatch] = React.useReducer(nameReducer, {combinedName: [], test:{}})
    const value = {state, dispatch}
    return <NameContext.Provider value={value}>{children}</NameContext.Provider>
}
function useNameContext(){
    const context = React.useContext(NameContext)
    if(context === undefined){
        throw new Error("must use inside of NameProvider")
    }
    return context
}

export {NameProvider, useNameContext}