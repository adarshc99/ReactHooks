import React, { useRef } from "react";
// import UseRef from "./UseRef";

function UseRef()
{
    const cssStyle = useRef();
    const change = () =>
    {
        cssStyle.current.style.color = "white";
        cssStyle.current.style.backgroundColor = "red";

       console.log(cssStyle.current.style.backgroundColor);
    };
    return (
        <>
            <input type="text"  ref={cssStyle} />
            <input type="button" value = "click" onClick={change}/>
        </>
    );
}
export default UseRef;