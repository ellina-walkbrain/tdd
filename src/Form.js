import React, { useCallback, useState } from "react";

const TodoForm = () => {
    const [value, setValue] = useState("");

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    return (
        <form>
            <input placeholder="입력하세요" value={value} onChange={onChange} />
        </form>
    );
};

export default TodoForm;
