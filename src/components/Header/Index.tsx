import * as Popover from "@radix-ui/react-popover";
import { FrameForAvatarUser } from "../FrameForAvatarUser/Index";
import { Logo } from "../Logo/Index";
import { PopoverAvatarModal } from "../PopoverAvatarModal/Index";
import { Text } from "../Text/Index";

interface HeaderProps {
  user?: string;
}

export function Header({ user }: HeaderProps) {
  return (
    <header className="w-full flex flex-row items-center justify-between px-5 sm:px-8 md:px-32 lg:px-52 py-3 md:py-5 bg-white shadow-md shadow-black/25">
      <Logo className="w-24 sm:w-28 md:w-32" />

      <nav className="flex flex-row items-center gap-4">
        <Text className="text-xs text-blue-marine font-semibold">{user}</Text>

        <Popover.Root>
          <Popover.Trigger>
            <FrameForAvatarUser />
          </Popover.Trigger>
          <PopoverAvatarModal />
        </Popover.Root>
      </nav>
    </header>
  );
}
