import SignIn from "@/components/sign-in";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

describe("", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders sign in heading", () => {
    render(<SignIn />);
    expect(screen.getByRole("heading", { level: 3 })).toBeDefined();
  });
});
