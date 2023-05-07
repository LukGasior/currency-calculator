import { Div } from "./styled";
import { useCurrentDate } from "./useCurrentDate";


const formatDate = (time) => time.toLocaleDateString("pl-PL",
    {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    }

);


const Clock = () => {
    const time = useCurrentDate();


    return (
        <Div>
            Dziś jest: {formatDate(time)}
        </Div>

    );
}


export default Clock;