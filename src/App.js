import React, { useState } from 'react';
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
    const [formDeliveryFrequency, setFormDeliveryFrequency] = useState('weekly')
    const [formDuringDay, toggleFormDuringDay] = useState(false);
    const [formInEvening, toggleFormInEvening] = useState(false);
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
            formInEvening, formRemarks, formTermsAndConditions);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>

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
                type="button"
                onClick={resetAllCounters}
            >
                <h3>Reset</h3>
            </button>

        </>
    )
        ;
}

export default App;
