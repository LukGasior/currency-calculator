import axios from "axios";
import { useEffect, useState } from "react";


export const useRatesData = () => {
    const [ratesData, setRatesData] = useState(({
        state: "loading",
    }));

    useEffect(() => {

const fetchRates = () => (async() => {
    try {
        const response = await axios ("https://api.exchangerate.host/latest?base=PLN&symbols=USD,EUR,CHF,GBP,CNY,JPY");
        const {rates, date } = response.data;
        setRatesData({
            state: "ok",
            rates,
            date,
        });
    } catch(error) {
        console.error("Coś poszło nie tak");
        setRatesData(({
            state: "error",
        }))



    }

}) ();
setTimeout(fetchRates, 2000);
    }, []);

    return ratesData;

}

/*        axios.get("https://api.exchangerate.host/latest?base=PLN&symbols=USD,EUR,CHF,GBP,CNY,JPY")
.then(response => {
    const { rates, date } = response.data;

    setRatesData({
        state: "Załadowano",
        rates,
        date,
    });

}); */