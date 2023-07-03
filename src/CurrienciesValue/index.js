import axios from "axios";
import { useEffect, useState } from "react";


export const useRatesData = () => {
    const [ratesData, setRatesData] = useState(({
        state: "Wczytywanie...",
    }));

    useEffect(() => {

        axios.get("https://api.exchangerate.host/latest?base=PLN&symbols=USD,EUR,CHF,GBP,CNY")
            .then(response => {
                const { rates, date } = response.data;

                setRatesData({
                    state: "Załadowano",
                    rates,
                    date,
                });

            });

    }, []);

    return ratesData;

}