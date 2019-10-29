import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CarouselButton from "./CarouselButton";

describe("CarouselButton", () => {
  it("renders a <button>", () => {
    const text = "I am a button";
    const dataAction = "prev";
    const onClick = () => {};
    const { container, debug } = render(
      <CarouselButton
        data-action={dataAction}
        children={text}
        onClick={onClick}
      />
    );
    const button = container.querySelector("button");
    expect(button).toHaveTextContent(text);
    expect(button).toHaveAttribute("type", "button");
    expect(button.getAttribute("data-action")).toBe(dataAction);
  });
});
