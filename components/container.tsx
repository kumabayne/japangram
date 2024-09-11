import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div
      data-testid="container"
      className="container px-2 mx-auto md:px-4 xl:px-6"
    >
      {children}
    </div>
  );
}
