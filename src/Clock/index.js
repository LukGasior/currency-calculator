import { useEffect, useState } from "react";
import { Div } from "./styled";

const Clock = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const clock = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(clock);
        }
    }, []);


    return (
        <Div
            className="clock">
            Dziś jest: {time.toLocaleString()}
        </Div>

    );
}


export default Clock;