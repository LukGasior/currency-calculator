import { useRatesData } from "../CurrienciesValue";
import { useState } from "react";
import Result from "./Result";
import { Label, Span, Input, Button, Select, Paragraph } from "./style";


const Form = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("CHF");
    const [result, setResult] = useState();
    const ratesData = useRatesData();


    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];
        setResult(
            {
                newAmount: +amount,
                newResult: amount / rate,
                currency,
            },
        );

    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        calculateResult(currency, amount);
    }
    return (

        <div>
            <form
                onSubmit={onFormSubmit}>
                <Label>
                    <Span>Kwota w zł:</Span>
                    <Input
                        type="number"
                        min="0"
                        placeholder="Podaj kwotę w zł"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        autoFocus
                    />
                </Label>

                <p>
                    <Label>
                        <Span>Waluta:</Span>
                        <Select
                            type="number"
                            onChange={(e) => setCurrency(e.target.value)}
                            value={currency}
                        >
                            {!!ratesData.rates && Object.keys(ratesData.rates).map((currency) => (
                                <option
                                    key={currency}
                                    value={currency}
                                >
                                    {currency}
                                </option>))}


                        </Select> </Label></p>

                <Button>Przelicz!</Button>

                <Paragraph>Kursy walut pobrane z Europejskiego Banku Centralnego.</Paragraph>
                <Paragraph>Aktualne na dzień <b>{ratesData.date}</b></Paragraph>

            </form>
            <Result
                    result={result} />
        </div>
    );
}

export default Form;