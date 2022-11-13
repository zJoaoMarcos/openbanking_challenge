import * as Avatar from "@radix-ui/react-avatar";
import { User } from "phosphor-react";

export function FrameForAvatarUser() {
  return (
    <Avatar.Root className="w-10 md:w-14 h-10 md:h-14 inline-flex items-center justify-center align-middle overflow-hidden rounded-full border-2 border-green-ocean shadow-md shadow-black/40">
      <Avatar.Image className="w-full h-full object-scale-down" />
      <User size={30} color="#9e9e9e" />
    </Avatar.Root>
  );
}
