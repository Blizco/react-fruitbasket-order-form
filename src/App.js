import React from 'react';
import './App.css';

function App() {
    const [counterStrawberries, setCounterStrawberries] = React.useState(0);
    const [counterBananas, setCounterBananas] = React.useState(0);
    const [counterApples, setCounterApples] = React.useState(0);
    const [counterKiwis, setCounterKiwis] = React.useState(0);

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
