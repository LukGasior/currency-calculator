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
        <Div>
            Dziś jest: {time.toLocaleDateString("pl-PL",
                {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                }

            )}
        </Div>

    );
}


export default Clock;