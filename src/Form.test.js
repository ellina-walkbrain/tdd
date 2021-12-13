import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./Form";

describe("<TodoForm />", () => {
    // input과 button의 유무를 확인
    it("has input and a button", () => {
        const { getByText, getByPlaceholderText } = render(<TodoForm />);
        getByPlaceholderText("입력하세요");
    });

    it("change input", () => {
        const { getByPlaceholderText } = render(<TodoForm />);
        const input = getByPlaceholderText("입력하세요");
        fireEvent.change(input, {
            target: {
                value: "사과",
            },
        });
        expect(input).toHaveAttribute("value", "사과");
    });
});
