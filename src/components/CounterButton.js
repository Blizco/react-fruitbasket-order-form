import React from 'react';

function CounterButton({children, clickHandler}) {
    return (
                <button
                    type="button"
                    onClick={clickHandler}
                >
                    {children}
                </button>
    )
}

export default CounterButton;