import * as Popover from "@radix-ui/react-popover";
import { FrameForAvatarUser } from "../FrameForAvatarUser/Index";
import { PopoverAvatarModal } from "../PopoverAvatarModal/Index";

export function PopoverAvatar() {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <FrameForAvatarUser />
      </Popover.Trigger>
      <PopoverAvatarModal />
    </Popover.Root>
  );
}
