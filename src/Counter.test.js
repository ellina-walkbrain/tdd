import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("<Counter/>", () => {
    it("matches snapshot", () => {
        const utils = render(<Counter />);
        expect(utils.container).toMatchSnapshot();
    });
    it("has number and two buttons", () => {
        //0과 + - 있는지 확인
        const utils = render(<Counter />);
        expect(utils.container).toMatchSnapshot();
        utils.getByText("0");
        utils.getByText("+");
        utils.getByText("-");
    });

    it("increases", () => {
        //증가
        const utils = render(<Counter />);
        const number = utils.getByText("0");
        const plusButton = utils.getByText("+");
        // 클릭 이벤트를 두번 발생시키기
        fireEvent.click(plusButton);
        fireEvent.click(plusButton);

        //두번 발생시켰을때 2가 되는지 확인
        expect(number.textContent).toBe("2");
    });

    it("decreases", () => {
        const utils = render(<Counter />);
        const number = utils.getByText("0");
        const plusButton = utils.getByText("-");
        // 클릭 이벤트를 두번 발생시키기
        fireEvent.click(plusButton);
        fireEvent.click(plusButton);
        expect(number).toHaveTextContent("-2"); // jest-dom 의 확장 matcher 사용
    });
});
