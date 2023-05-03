import { CurrienciesValue } from "../CurrienciesValue";
import { useState } from "react";
import Result from "./Result";


import { Label, Span, Input, Button, Select } from "./style";


const Form = () => {
    const [amount, SetAmount] = useState("");
    const [currency, SetCurrency] = useState(CurrienciesValue[0].exRate);
    const [result, SetResult] = useState();

    const onFormSubmit = (e) => {
        e.preventDefault();
        const shortName = CurrienciesValue
            .find(({ exRate }) => exRate === (+currency)).shortName;

        SetResult(
            {
                newAmount: +amount,
                newResult: amount / currency,
                currency,
                shortName,

            },
        );
    }
    return (

        <div>
            <form
                onSubmit={onFormSubmit}>
                <p>
                    <Label className="form__label">
                        <Span className="form__text">Kwota w zł:</Span>
                        <Input className="form__Input"

                            type="number"
                            min="0"
                            placeholder="Podaj kwotę w zł"
                            value={amount}
                            onChange={(e) => SetAmount(e.target.value)}
                            autoFocus
                        />
                    </Label>
                </p>
                <p>
                    <Label className="form__label">
                        <Span className="form__text">Waluta:</Span>
                        <Select
                            className="form__Input"
                            type="number"
                            onChange={(e) => SetCurrency(e.target.value)}
                            value={currency}
                        >

                            {CurrienciesValue.map(currency => (
                                <option
                                    key={currency.shortName}
                                    value={currency.exRate}
                                >
                                    {currency.name}
                                </option>))}
                        </Select> </Label></p>

                <Button className="form__Button">Przelicz!</Button>
                <div>
                    <p>Kurs: {currency}</p>
                    <Result
                        result={result}
                    />

                </div>
            </form>

        </div>
    );
}

export default Form;