import { useEffect, useState } from "react";

const useCounter = (isForward = true) => {
    const [counter , setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {

            isForward ? setCounter((prevCounter) => prevCounter + 1) : setCounter((prevCounter) => prevCounter - 1);
            
        } , 1000);

        return () => {clearInterval(interval)} 
    },[isForward])

    return counter;
}

export default useCounter;