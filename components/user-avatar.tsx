import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function UserAvatar({
  src,
  alt,
  reply,
}: {
  src?: string;
  alt?: string;
  reply?: boolean;
}) {
  return (
    <Avatar className={cn(reply && "w-8 h-8 text-xs")}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
