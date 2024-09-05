import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import Container from "@/components/container";

describe("Container", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders container children", () => {
    render(
      <Container>
        <div>Test Container</div>
      </Container>
    );

    expect(screen.getByText("Test Container")).toBeDefined();
  });

  it("renders container classes", () => {
    render(
      <Container>
        <div>Test Container</div>
      </Container>
    );

    const container = screen.getByTestId("container");

    expect(container.classList.contains("container")).toBe(true);
    expect(container.classList.contains("mx-auto")).toBe(true);
    expect(container.classList.contains("px-2")).toBe(true);
  });
});
