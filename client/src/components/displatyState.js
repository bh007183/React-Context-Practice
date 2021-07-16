import React from "react";
import {useNameContext} from "../context/names"

export default function Component() {
   
let petNames = useNameContext()

  return (
    <div style={{ float: "right" }}>
     <ol>
       {petNames.state.combinedName.map(item => <li>{item.firstName}</li>)}
     </ol>
    </div>
  );
}
