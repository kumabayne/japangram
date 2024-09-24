import LeaveComment from "@/components/leave-comment";
import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

const handleSubmit = vi.fn();
const setOpen = vi.fn();

describe("LeaveComment", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders trigger button for comment", () => {
    render(
      <LeaveComment
        open={false}
        setOpen={setOpen}
        handleSubmit={handleSubmit}
      />
    );
    expect(screen.getByRole("button", { name: "Leave comment" })).toBeDefined();
  });

  it("renders trigger button for reply", () => {
    render(
      <LeaveComment
        open={false}
        setOpen={setOpen}
        handleSubmit={handleSubmit}
        reply={true}
      />
    );
    expect(screen.getByRole("button", { name: "Leave reply" })).toBeDefined();
  });

  it("renders label", async () => {
    render(
      <LeaveComment open={true} setOpen={setOpen} handleSubmit={handleSubmit} />
    );
    expect(screen.getByLabelText("Comment")).toBeDefined();
  });

  it("renders input", async () => {
    render(
      <LeaveComment open={true} setOpen={setOpen} handleSubmit={handleSubmit} />
    );
    expect(
      screen.getByRole("textbox", { name: "leave-comment" })
    ).toBeDefined();
  });

  it("renders user typed input text", async () => {
    render(
      <LeaveComment open={true} setOpen={setOpen} handleSubmit={handleSubmit} />
    );
    const input: HTMLInputElement = screen.getByRole("textbox", {
      name: "leave-comment",
    });
    await userEvent.type(input, "test");
    expect(input.value).toBe("test");
  });

  it("renders submit button", async () => {
    render(
      <LeaveComment open={true} setOpen={setOpen} handleSubmit={handleSubmit} />
    );
    expect(screen.getByRole("button", { name: "Post comment" })).toBeDefined();
  });

  it("fires submit handler", async () => {
    render(
      <LeaveComment open={true} setOpen={setOpen} handleSubmit={handleSubmit} />
    );
    const postButton = screen.getByRole("button", { name: "Post comment" });
    const input: HTMLInputElement = screen.getByRole("textbox", {
      name: "leave-comment",
    });
    await userEvent.type(input, "test");
    await userEvent.click(postButton);
    expect(handleSubmit).toBeCalledTimes(1);
  });
});
