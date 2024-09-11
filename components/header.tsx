import HamburgerMenu from "./hamburger-menu";

export default function Header() {
  return (
    <header
      className="px-4 py-2 border-b fixed top-0 left-0 right-0 z-40 bg-background md:hidden dark:bg-zinc-950 dark:border-zinc-800"
      aria-label="banner"
    >
      <HamburgerMenu />
    </header>
  );
}
