import LikeButton from "@/components/like-button";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

describe("Like Button", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders like button", () => {
    render(<LikeButton />);
    expect(screen.getByRole("button", { name: "Like" }));
  });

  it("renders unsave button", async () => {
    render(<LikeButton />);
    const button = screen.getByRole("button", { name: "Like" });
    await fireEvent.click(button);
    expect(screen.getByRole("button", { name: "Unlike" }));
  });
});
