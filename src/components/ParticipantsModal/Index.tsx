import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { Participants } from "../../types/User";
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
      <Dialog.Content className="w-80 sm:w-[420px] h-[750px] md:w-[620px] flex flex-col justify-evenly bg-white py-2 sm:py-6 px-4 sm:px-8 gap-2 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25">
        <Dialog.Title className="flex flex-row items-center justify-start gap-4">
          <FrameForLogoParticipants
            urlImage={AuthorisationServers[0].CustomerFriendlyLogoUri}
            alt={OrganisationName}
          />
          <div className="text-md md:text-md text-green-ocean font-semibold">
            {OrganisationName}
          </div>
        </Dialog.Title>
        <Dialog.Description className="text-2xs sm:text-sm flex flex-col">
          {AuthorisationServers[0].CustomerFriendlyDescription}
        </Dialog.Description>
        <div className="flex flex-col items-center justify-center gap-2 mt-6">
          <Heading className="text-md md:text-lg text-blue-marine">
            AuthorisationServer
          </Heading>

          <div className="w-full flex flex-col items-center gap-2 p-2 text-center bg-green-ocean/20 rounded border-2 border-dashed border-black/40">
            {AuthorisationServers[0].ApiResources[0] !== undefined ? (
              <div className="w-full flex flex-col gap-3">
                <Text className="text-2xs md:text-sm">
                  <b>ID:</b> {AuthorisationServers[0].AuthorisationServerId}
                </Text>
                <Text className="text-blue-marine text-sm md:text-md">
                  Api Resources
                </Text>
                <Text>
                  <b>ID:</b>{" "}
                  {AuthorisationServers[0].ApiResources[0].ApiResourceId}
                </Text>

                <Text>
                  <b>Family:</b>{" "}
                  {AuthorisationServers[0].ApiResources[0].ApiFamilyType}
                </Text>

                <Text className="text-blue-marine text-sm md:text-md">
                  Discovery Endpoints
                </Text>

                <Text>
                  <b>ID:</b>{" "}
                  {
                    AuthorisationServers[0].ApiResources[0]
                      .ApiDiscoveryEndpoints[0].ApiDiscoveryId
                  }
                </Text>

                <Text className="text-xs sm:text-sm">
                  {
                    AuthorisationServers[0].ApiResources[0]
                      .ApiDiscoveryEndpoints[0].ApiEndpoint
                  }
                </Text>
              </div>
            ) : (
              <div className="h-[200px] flex items-center">
                <Text className="text-xl text-red-300 animate-pulse">
                  Não encontrado...
                </Text>
              </div>
            )}
          </div>
        </div>

        <Dialog.Close className="w-7 h-7 rounded-full inline-flex items-center justify-center absolute top-3 right-3 hover:bg-gray-200/20 focus:ring-gray-200 focus:ring-1">
          <X size={24} color="#9e9e9e" />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
