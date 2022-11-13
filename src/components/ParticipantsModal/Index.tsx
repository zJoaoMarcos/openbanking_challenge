import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { Participants } from "../../hooks/useParticipants";
import { Button } from "../Button/Index";
import { FrameForLogoParticipants } from "../FrameForLogoParticipants/Index";
import { Heading } from "../Heading/Index";
import { Text } from "../Text/Index";

type ParticipantsModalProps = Pick<
  Participants,
  "AuthorisationServers" | "OrganisationName"
>;

export function ParticipantsModal({
  AuthorisationServers,
  OrganisationName,
}: ParticipantsModalProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="w-72 sm:w-[420px] h-[500px] md:w-[620px] flex flex-col justify-evenly bg-white py-2 sm:py-6 px-4 sm:px-8 gap-2 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25">
        <Dialog.Title className="flex flex-row items-center justify-start gap-4">
          <FrameForLogoParticipants
            urlImage={AuthorisationServers[0].CustomerFriendlyLogoUri}
            alt={OrganisationName}
          />
          <Heading className="text-md md:text-xl text-green-ocean font-semibold">
            {OrganisationName}
          </Heading>
        </Dialog.Title>
        <Dialog.Description className="text-2xs sm:text-sm flex flex-col">
          {AuthorisationServers[0].CustomerFriendlyDescription}
        </Dialog.Description>
        <div className="flex flex-col items-center justify-center gap-2 mt-6">
          <Heading className="text-md md:text-lg text-blue-marine">
            AuthorisationServers
          </Heading>

          <div className="w-full flex flex-col items-center gap-2 p-2 text-center bg-green-ocean/20 rounded border-2 border-dashed border-black/40">
            <Text className="text-2xs md:text-sm">
              <b>ID:</b> {AuthorisationServers[0].AuthorisationServerId}
            </Text>
            <Text className="text-blue-marine text-sm md:text-md">
              Api Resources
            </Text>
          </div>

          <footer className="w-full mt-3">
            <Button className="text-xs md:text-md">Copiar</Button>
          </footer>
        </div>

        <Dialog.Close className="w-7 h-7 rounded-full inline-flex items-center justify-center absolute top-3 right-3 hover:bg-gray-200/20 focus:ring-gray-200 focus:ring-1">
          <X size={24} color="#9e9e9e" />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

/* AuthorisationServers": [
  {
    "AuthorisationServerId": "780f2093-e531-4ac0-b7b3-016d55812b4d",
    "AutoRegistrationSupported": true,
    "AutoRegistrationNotificationWebhook": null,
    "SupportsCiba": false,
    "SupportsDCR": false,
    "ApiResources": [
      {
        "ApiResourceId": "1c506bea-ed19-4289-81b7-f00ab48d8a1d",
        "ApiVersion": "1",
        "ApiDiscoveryEndpoints": [
          {
            "ApiDiscoveryId": "e84d8015-253d-4d8c-8861-0b904f4ade6a",
            "ApiEndpoint": "https://api.sulcrediouro.com.br/open-banking/channels/v1/branches"
          },
          {
            "ApiDiscoveryId": "ac7683f5-34ff-4012-b5b3-fd03d393dde1",
            "ApiEndpoint": "https://api.sulcrediouro.com.br/open-banking/channels/v1/electronic-channels"
          },
          {
            "ApiDiscoveryId": "a4e4434f-cdf8-469c-9668-286488ec5069",
            "ApiEndpoint": "https://api.sulcrediouro.com.br/open-banking/channels/v1/phone-channels"
          },
          {
            "ApiDiscoveryId": "4abde9c9-dba9-4306-ae2b-f006dc2c44c0",
            "ApiEndpoint": "https://api.sulcrediouro.com.br/open-banking/channels/v1/banking-agents"
          },
          {
            "ApiDiscoveryId": "77469582-3061-42fd-9bc3-7129954e92c1",
            "ApiEndpoint": "https://api.sulcrediouro.com.br/open-banking/channels/v1/shared-automated-teller-machines"
          }
        ],
        "FamilyComplete": false,
        "ApiCertificationUri": null,
        "CertificationStatus": null,
        "CertificationStartDate": null,
        "CertificationExpirationDate": null,
        "ApiFamilyType": "channels"
      }, */
