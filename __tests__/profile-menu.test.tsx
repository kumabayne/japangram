import ProfileMenu from "@/components/profile-menu";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

describe("", () => {
  afterEach(() => {
    cleanup();
  });

  const session = {
    id: "0000-0000-0000-0000",
    displayName: "Test User",
    image: "",
    expires: "",
  };

  it("renders menu trigger", () => {
    render(<ProfileMenu session={session} />);
    expect(screen.getByRole("button", { name: "Profile" })).toBeDefined();
  });

  it("renders profile link when trigger is clicked", async () => {
    render(<ProfileMenu session={session} />);
    const button = screen.getByRole("button", { name: "Profile" });
    await userEvent.click(button);
    expect(screen.getByRole("menuitem", { name: "Profile" })).toBeDefined();
  });

  it("renders logout action when trigger is clicked", async () => {
    render(<ProfileMenu session={session} />);
    const button = screen.getByRole("button", { name: "Profile" });
    await userEvent.click(button);
    expect(screen.getByRole("menuitem", { name: "Logout" })).toBeDefined();
  });
});
