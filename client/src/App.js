
import './App.css';
import {PetProvider, usePetContext} from "./context/pets"
import {AgeProvider} from "./context/age"
import {NameProvider} from "./context/names"
import Agedown from "./components/agedown"
import Component from "./components/displatyState"
import ManageName from "./components/manageName"

function App() {
  return (
    <>
    <NameProvider>
  
   <ManageName/>
   <Component/>

    </NameProvider>
    <AgeProvider>
      <Agedown/>
    </AgeProvider>
    </>

  );
}

export default App;
