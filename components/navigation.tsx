import { NavigationType } from "@/types/layout";
import Link from "next/link";

export default function Navigation({
  navigationData,
}: {
  navigationData: NavigationType[];
}) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 p-4 border-t z-40 bg-background md:top-0 md:right-auto md:p-2 md:border-t-0 md:border-r">
      <ul className="grid grid-cols-5 md:flex md:flex-col">
        {navigationData.map((item) => (
          <li key={item.id} className="flex justify-center">
            <Link className="inline-flex md:p-3" href={item.href}>
              <item.icon className="w-6 h-6" stroke={1.5} />
              <span className="sr-only">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
