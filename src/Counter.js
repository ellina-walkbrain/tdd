import React, { useCallback, useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const onClickPlus = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    const onClickMinus = useCallback(() => {
        setCount(count - 1);
    }, [count]);

    return (
        <div className="counter">
            <h1>counter입니다</h1>
            <button className="plus-button" onClick={onClickPlus}>
                +
            </button>
            <span>{count}</span>
            <button className="plus-button" onClick={onClickMinus}>
                -
            </button>
        </div>
    );
}
