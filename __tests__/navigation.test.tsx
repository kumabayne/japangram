import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Navigation from "@/components/navigation";
import { navigationData } from "@/data/layout";

describe("Navigation", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders nav", () => {
    render(<Navigation navigationData={navigationData} />);
    expect(screen.getByRole("navigation")).toBeDefined();
  });

  it("renders links", () => {
    render(<Navigation navigationData={navigationData} />);
    navigationData.map((item) => {
      const link = screen.getByRole("link", { name: item.text });
      expect(link).toBeDefined();
      expect(link.getAttribute("href")).toBe(item.href);
    });
  });
});
