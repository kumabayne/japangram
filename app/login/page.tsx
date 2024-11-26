import SignIn from "@/components/sign-in";

export default function LoginPage() {
  return (
    <main className="mt-[66px] md:ml-[65px] xl:ml-[224px]">
      <div className="bg-background mx-4 rounded-2xl p-4 shadow max-w-sm md:mx-auto">
        <SignIn />
      </div>
    </main>
  );
}
