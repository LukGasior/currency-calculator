import { useEffect, useState } from "react";

export const useCurrentDate = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const clock = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(clock);
        }
    }, []);

return time;
}