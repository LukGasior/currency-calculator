import { useEffect, useState } from "react";
import "./style.css"

const Clock = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
    }, []);


    return (
        <div 
        className="clock">
            Dziś jest: {time.toLocaleString()}
        </div>

    );
}


export default Clock;