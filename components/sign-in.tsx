import { signIn } from "@/auth";
import Image from "next/image";
import { DialogTitle } from "./ui/dialog";

export default function SignIn({ modal }: { modal?: boolean }) {
  const Title = modal ? DialogTitle : "h3";
  return (
    <div className="flex flex-col gap-2 items-center">
      <Title className="text-center">Sign In</Title>
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirect: true, redirectTo: "/" });
        }}
      >
        <button
          className="border px-3 text-sm font-semibold h-10 rounded-sm flex gap-3 justify-center items-center"
          type="submit"
        >
          <Image
            src="/images/google-logo.png"
            width="20"
            height="20"
            alt="Login with Google"
          />
          Sign in with Google
        </button>
      </form>
    </div>
  );
}
