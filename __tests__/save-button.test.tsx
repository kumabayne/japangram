import SaveButton from "@/components/save-button";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

describe("SaveButton", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders save button", () => {
    render(<SaveButton />);
    expect(screen.getByRole("button", { name: "Save" }));
  });

  it("renders unsave button", async () => {
    render(<SaveButton />);
    const button = screen.getByRole("button", { name: "Save" });
    await fireEvent.click(button);
    expect(screen.getByRole("button", { name: "Unsave" }));
  });
});
