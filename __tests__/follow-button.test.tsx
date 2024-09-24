import FollowButton from "@/components/follow-button";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

describe("Follow Button", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders follow button", () => {
    render(<FollowButton />);
    expect(screen.getByRole("button", { name: "Follow" }));
  });

  it("renders unfollow button", async () => {
    render(<FollowButton />);
    const button = screen.getByRole("button", { name: "Follow" });
    await fireEvent.click(button);
    expect(screen.getByRole("button", { name: "Unfollow" }));
  });
});
