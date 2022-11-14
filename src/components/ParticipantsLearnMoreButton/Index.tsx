import * as Dialog from "@radix-ui/react-dialog";
import { Participants } from "../../types/User";
import { Button } from "../Button/Index";
import { ParticipantsModal } from "../ParticipantsModal/Index";

type ParticipantsLearnMoreButtonProps = Pick<
  Participants,
  "AuthorisationServers" | "OrganisationName"
>;

export function ParticipantsLearnMoreButton({
  AuthorisationServers,
  OrganisationName,
}: ParticipantsLearnMoreButtonProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button className="rounded-3xl text-2xs md:text-sm transition-colors font-normal hover:bg-yellow">
          Mais...
        </Button>
      </Dialog.Trigger>
      <ParticipantsModal
        AuthorisationServers={AuthorisationServers}
        OrganisationName={OrganisationName}
      />
    </Dialog.Root>
  );
}
