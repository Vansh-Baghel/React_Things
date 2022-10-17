// import { useEffect, useState } from "react";
import Card from "./Card"
import useCounter from "../Custom-Hooks/useCounter";

const ForwardCounter = () => {
    // const [counter , setCounter] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCounter((prevCounter) => prevCounter + 1);
    //     } , 1000);

    //     return () => {clearInterval(interval)} 
    // },[])

    const counter = useCounter(true);

    return (
        <Card> {counter} </Card>
    )
    
}

export default ForwardCounter;