import * as Popover from "@radix-ui/react-popover";
import { useAuth } from "../../contexts/authProvider";

export function PopoverAvatarModal() {
  const { signOut } = useAuth();

  return (
    <Popover.Portal className="">
      <Popover.Content className="w-20 md:w-24 p-4 flex items-center justify-center rounded bg-gray-100 shadow shadow-black/40">
        <button
          onClick={() => signOut()}
          className="text-xs md:text-md text-blue-marine font-bold underline transition-colors hover:text-green-ocean "
        >
          Sair
        </button>
      </Popover.Content>
    </Popover.Portal>
  );
}
