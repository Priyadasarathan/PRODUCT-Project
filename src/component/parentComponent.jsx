import React from "react";
import childComponent from "./childComponent";

function parentComponent(){
 const clicked = ()=>{
  console.log("yes clicked the button")
 }
  return(
    <div>
        <h1>sadfasdfsadf</h1>
        <childComponent clicked={clicked} />
    </div>
        
  )
}

export default parentComponent;
// //Parent component 
// import React from "react";
// import ChildComponent from "./Function2";
// // import Function2 from './Function2'


// function ParentComponent(){
//     const onclickhandle=()=>{
//         console.log('yes clicked here')
//     }
//    return(
//     <div>
//         <h1>Passing function to another component</h1>
//         <ChildComponent onclickhandle={onclickhandle}/>
//     </div>
//    )

// }
// export default ParentComponent;
