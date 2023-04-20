import { CurrienciesValue } from "../CurrienciesValue";
import { useState } from "react";
import Result from "./Result";
import "./style.css"


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
                    <label className="form__label">
                        <span className="form__text">Kwota w zł:</span>
                        <input className="form__input"

                            type="number"
                            min="0"
                            placeholder="Podaj kwotę w zł"
                            value={amount}
                            onChange={(e) => SetAmount(e.target.value)}
                            autoFocus
                        />
                    </label>
                </p>
                <p>
                    <label className="form__label">
                        <span className="form__text">Waluta:</span>
                        <select
                            className="form__input"
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
                        </select> </label></p>

                <button className="form__button">Przelicz!</button>
                <div className="form__container">
                    <p>Złotych: {amount}</p>
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