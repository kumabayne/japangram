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

export default function HamburgerMenu() {
  const { theme, setTheme } = useTheme();

  const handleChange = (value: boolean) => {
    if (value) {
      setTheme(() => "dark");
    } else {
      setTheme(() => "light");
    }
  };

  return (
    <Menubar className="border-none p-0 h-auto">
      <MenubarMenu>
        <MenubarTrigger className="p-1 !bg-transparent">
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
  );
}
