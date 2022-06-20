import React, { useEffect, useState } from 'react';
function UsEfeect()
{
    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(0);
    // const [display,Show] = useState("hello");
    useEffect(() =>
    {
        console.log("hello");
        // Show("Helllo!world");
    },[count]);
    useEffect(() =>
    {
        console.log("hello");
        // Show("Helllo!world");
    },[count1]);
    const inc = () =>
    {
        setCount(count+1);
        
    }
    const inc1 = () =>
    {
       
        setCount1(count1+1);
    }
    return <h1>{count}{count1}<button onClick={inc}>inc</button><button onClick={inc1}>inc1</button></h1>;
}
export default UsEfeect;