import { NavigationType } from "@/types/layout";
import Link from "next/link";
import HamburgerMenu from "./hamburger-menu";

export default function Navigation({
  navigationData,
}: {
  navigationData: NavigationType[];
}) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 p-4 border-t z-40 bg-background md:top-0 md:right-auto md:p-2 md:border-t-0 md:border-r xl:min-w-56 dark:bg-zinc-950 dark:border-zinc-800 md:justify-between md:flex md:flex-col">
      <ul className="grid grid-cols-5 md:flex md:flex-col">
        {navigationData.map((item) => (
          <li key={item.id} className="flex justify-center xl:justify-normal">
            <Link
              className="inline-flex md:p-3 xl:w-full xl:gap-4 xl:items-center"
              href={item.href}
            >
              <item.icon className="w-6 h-6" stroke={1.5} />
              <span className="sr-only xl:not-sr-only font-medium">
                {item.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="hidden md:block">
        <HamburgerMenu />
      </div>
    </nav>
  );
}
