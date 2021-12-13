import React from "react";

import { render } from "@testing-library/react";

import Profile from "./Profile";

describe("<Profile/>", () => {
    it("matches snapshot", () => {
        // render 호출시
        const utils = render(<Profile />);
        //container : 해당컴포넌트 최상단 DOM
        expect(utils.container).toMatchSnapshot();
    });
});
