import Comment from "@/components/comment";
import { commentsData } from "@/data/posts";
import { formatTimestamp } from "@/lib/utils";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

const comment = commentsData.comments[commentsData.comments.length - 1];

describe("Comment", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders username", () => {
    render(<Comment comment={comment} />);
    expect(screen.getByText("testuser3")).toBeDefined();
  });

  it("renders timestamp", () => {
    render(<Comment comment={comment} />);
    expect(screen.getByText(formatTimestamp(comment.timestamp))).toBeDefined();
  });

  it("renders like count if greater than 0", () => {
    render(<Comment comment={comment} />);
    expect(screen.getByText(8)).toBeDefined();
  });
});
