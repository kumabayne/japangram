import { Icon, IconProps } from "@tabler/icons-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type NavigationType = {
  id: number;
  href: string;
  text: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
};
