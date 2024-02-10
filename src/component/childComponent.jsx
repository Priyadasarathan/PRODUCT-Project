import React from "react";

function childComponent(clicked){
return(
    <div>
        <button onClick={clicked}>Click here tooo</button>
        
    </div>
)
}
export default childComponent;


// import React from "react";

// function ChildComponent({onclickhandle}){
//     return(
//         <div>
//             <button onClick={onclickhandle}>Click here for function start </button>
//         </div>
//     )
// }

// export default ChildComponent;