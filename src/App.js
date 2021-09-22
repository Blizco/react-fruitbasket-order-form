import React, {useState} from 'react';
import './App.css';

function App() {
    // useState hooks voor opdracht 1
    const [counterStrawberries, setCounterStrawberries] = useState(0);
    const [counterBananas, setCounterBananas] = useState(0);
    const [counterApples, setCounterApples] = useState(0);
    const [counterKiwis, setCounterKiwis] = useState(0);

    // useState hooks voor opdracht 2
    const [formFirstName, setFormFirstName] = useState('');
    const [formLastName, setFormLastName] = useState('');
    const [formAge, setFormAge] = useState(0);
    const [formZipCode, setFormZipCode] = useState('');
    const [formDeliveryFrequency, setFormDeliveryFrequency] = useState('weekly');
    const [formDayOrEvening, setFormDayOrEvening] = useState('In the daytime')
    const [formRemarks, setFormRemarks] = useState('');
    const [formTermsAndConditions, toggleFormTermsAndConditions] = useState(false);


    // functies voor opdracht 1
    function decreaseCounterStrawberries() {
        if (counterStrawberries > 0) setCounterStrawberries(counterStrawberries - 1);
    }

    function decreaseCounterBananas() {
        if (counterBananas > 0) setCounterBananas(counterBananas - 1);
    }

    function decreaseCounterApples() {
        if (counterApples > 0) setCounterApples(counterApples - 1);
    }

    function decreaseCounterKiwis() {
        if (counterKiwis > 0) setCounterKiwis(counterKiwis - 1);
    }

    function resetAllCounters() {
        setCounterStrawberries(counterStrawberries - counterStrawberries);
        setCounterBananas(counterBananas - counterBananas);
        setCounterApples(counterApples - counterApples);
        setCounterKiwis(counterKiwis - counterKiwis);
    }

    // functies voor opdracht 2
    function handleSubmit(e) {
        e.preventDefault();
        console.log(counterStrawberries, counterBananas, counterApples, counterKiwis,
            formFirstName, formLastName, formAge, formZipCode, formDeliveryFrequency,
            formDayOrEvening, formRemarks, formTermsAndConditions);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>

            {/*// Verder met Opdracht 1*/}

            <nav className="strawberries">
                <h1>🍓 Aardbeien
                    <button
                        type="button"
                        onClick={decreaseCounterStrawberries}
                    >
                        -
                    </button>
                    {counterStrawberries}
                    <button
                        type="button"
                        onClick={() => setCounterStrawberries(counterStrawberries + 1)}
                    >
                        +
                    </button>
                </h1>
            </nav>

            <nav className="bananas">
                <h1>🍌 Bananen
                    <button
                        type="button"
                        onClick={decreaseCounterBananas}
                    >
                        -
                    </button>
                    {counterBananas}
                    <button
                        type="button"
                        onClick={() => setCounterBananas(counterBananas + 1)}
                    >
                        +
                    </button>
                </h1>
            </nav>

            <nav className="apples">
                <h1>🍏 Appels
                    <button
                        type="button"
                        onClick={decreaseCounterApples}
                    >
                        -
                    </button>
                    {counterApples}
                    <button
                        type="button"
                        onClick={() => setCounterApples(counterApples + 1)}
                    >
                        +
                    </button>
                </h1>
            </nav>

            <nav className="kiwis">
                <h1>🥝 Kiwi's
                    <button
                        type="button"
                        onClick={decreaseCounterKiwis}
                    >
                        -
                    </button>
                    {counterKiwis}
                    <button
                        type="button"
                        onClick={() => setCounterKiwis(counterKiwis + 1)}
                    >
                        +
                    </button>
                </h1>
            </nav>

            <button
                className="reset-button"
                type="reset"
                onClick={resetAllCounters}
            >
                <h3>Reset</h3>
            </button>

            {/*Verder met Opdracht 2*/}
            <form onSubmit={handleSubmit}>
                <label htmlFor="form-first-name">
                    Voornaam
                    <input
                        type="text"
                        name="first-name"
                        id="form-first-name"
                        value={formFirstName}
                        onChange={(e) => setFormFirstName(e.target.value)}
                    />
                </label>

                <label htmlFor="form-last-name">
                    Achternaam
                    <input
                        type="text"
                        name="last-name"
                        id="form-last-name"
                        value={formLastName}
                        onChange={(e) => setFormLastName(e.target.value)}
                    />
                </label>

                <label htmlFor="form-age">
                    Leeftijd
                    <input
                        type="number"
                        min="0"
                        name="age"
                        id="form-age"
                        value={formAge}
                        onChange={(e) => setFormAge(parseInt(e.target.value))}
                    />
                </label>

                <label htmlFor="form-zip-code">
                    Postcode
                    <input
                        type="text"
                        name="zip-code"
                        id="form-zip-code"
                        value={formZipCode}
                        onChange={(e) => setFormZipCode(e.target.value)}
                    />
                </label>

                <label htmlFor="form-delivery-frequency">
                    Bezorgfrequentie
                </label>
                <select name="delivery-frequency" id="form-delivery-frequency"
                        value={formDeliveryFrequency}
                        onChange={(e) => setFormDeliveryFrequency(e.target.value)}
                >
                    <option value="weekly">Iedere week
                    </option>
                    <option value="two-weekly">Om de week
                    </option>
                    <option value="monthly">Iedere maand
                    </option>
                </select>

                <span>
                    <label htmlFor="form-in-day-time">
                        <input
                            type="radio"
                            name="day-or-evening"
                            id="form-in-day-time"
                            value="In the daytime"
                            checked={formDayOrEvening === "In the daytime"}
                            onChange={(e) => setFormDayOrEvening(e.target.value)}
                        />
                        Overdag
                    </label>

                    <label htmlFor="form-in-evening">
                        <input
                            type="radio"
                            name="day-or-evening"
                            id="form-in-evening"
                            value="In the evening"
                            checked={formDayOrEvening === "In the evening"}
                            onChange={(e) => setFormDayOrEvening(e.target.value)}
                        />
                        's Avonds
                    </label>
                </span>

                <label htmlFor="form-remarks">
                    Opmerking
                    <textarea
                        name="remarks"
                        id="form-remarks"
                        cols="50"
                        rows="8"
                        value={formRemarks}
                        onChange={(e) => setFormRemarks(e.target.value)}
                    >
                    </textarea>
                </label>

                <label htmlFor="form-terms-and-conditions">
                    <input
                        type="checkbox"
                        name="terms-and-conditions"
                        id="form-terms-and-conditions"
                        checked={formTermsAndConditions}
                        onChange={() => toggleFormTermsAndConditions(!formTermsAndConditions)}
                    />
                    Ik ga akkoord met de voorwaarden
                </label>

                <button type="submit">
                    Verzend
                </button>
            </form>
        </>
    );
}

export default App;
