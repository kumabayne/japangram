"use server";

import { signOut } from "@/auth.ts";
import { Button } from "./ui/button";

export function SignOut() {
  return (
    <form
      action={async () => {
        await signOut();
      }}
    >
      <Button type="submit">Sign Out</Button>
    </form>
  );
}
