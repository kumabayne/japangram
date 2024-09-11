"use client";

import { IconMenu, IconMoon, IconSun } from "@tabler/icons-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();

  const handleChange = (value: boolean) => {
    if (value) {
      setTheme(() => "dark");
    } else {
      setTheme(() => "light");
    }
  };

  return (
    <header
      className="px-4 py-2 border-b fixed top-0 left-0 right-0 z-40 bg-background md:hidden"
      aria-label="banner"
    >
      <Menubar className="border-none">
        <MenubarMenu>
          <MenubarTrigger>
            <IconMenu className="w-6 h-6" stroke={1.5} />
            <span className="sr-only">Menu</span>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem
              className="focus:bg-transparent"
              onSelect={(e) => e.preventDefault()}
            >
              <div className="flex justify-between items-center gap-2 w-full">
                <span>Mode</span>
                <div className="flex gap-1 items-center">
                  <IconSun className="w-4 h-4" stroke={1.5} />
                  <Switch
                    className="CustomSwitch"
                    id="color-mode"
                    defaultChecked={theme === "dark" ? true : false}
                    onCheckedChange={handleChange}
                  />
                  <IconMoon className="w-4 h-4" stroke={1.5} />
                </div>
              </div>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </header>
  );
}
