import * as React from "react"

const storContext = React.createContext({
    name: '',
    age: '',
    horse: '',
})

function storeReducer(store, action){
    switch (action.type) {
        case "setName":
            return {name: action.payload}
            
        case "setAge":
            return {age: action.payload}
            
        case "setHorse":
            return {horse: action.payload}
            
            
    
        default:
            throw new Error(`unhandled action type: ${action.type}`)
    }
}

function StoreProvider({children}){
    const [store, dispatch] = React.useReducer(storeReducer, {
        name:"",
        age: "",
        horse: "",
    })
    const value = {store, dispatch}
    return <storContext.Provider value={value}>{children}</storContext.Provider>

}

function useStoreContext(){
    const context = React.useContext(storContext)
    if(!context){
        throw new Error("useStoreContext must be used inside StoreProvider")
    }
}

export {StoreProvider, useStoreContext}

