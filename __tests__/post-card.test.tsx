import PostCard from "@/components/post-card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { postData } from "@/data/posts";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    events: {
      on: vi.fn(),
      off: vi.fn(),
      emit: vi.fn(),
    },
    isFallback: false,
  }),
}));

describe("PostCard", () => {
  beforeEach(() => {
    render(
      <Dialog defaultOpen={true}>
        <DialogContent>
          <PostCard item={postData} modal={true} />
        </DialogContent>
      </Dialog>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("renders back button", () => {
    expect(screen.getByRole("button", { name: "Back" })).toBeDefined();
  });

  it("renders description", () => {
    expect(screen.getByText(postData.body)).toBeDefined();
  });
});
