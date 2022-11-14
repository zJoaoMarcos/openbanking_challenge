import { useState } from "react";
import { useParticipants } from "../../hooks/useParticipants";
import { AnimationLoading } from "../Animation.Loading/Index";
import { FrameForLogoParticipants } from "../FrameForLogoParticipants/Index";
import { PaginationTable } from "../PaginationTable/Index";
import { ParticipantsLearnMoreButton } from "../ParticipantsLearnMoreButton/Index";

export function ParticipantsTable() {
  const { isLoading, participants, wantedParticipant } = useParticipants();
  const [currentPage, setCurrentPage] = useState(1);
  const [participantsPerPage] = useState(17);

  const indexOfLastParticipant = currentPage * participantsPerPage;
  const indexOfFirstParticipant = indexOfLastParticipant - participantsPerPage;
  const filteredParticipants = participants.filter((participant) =>
    participant.LegalEntityName.toLocaleLowerCase().includes(wantedParticipant)
  );
  const currentParticipants = filteredParticipants.slice(
    indexOfFirstParticipant,
    indexOfLastParticipant
  );
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="w-full flex flex-col items-end gap-2">
      {isLoading && <AnimationLoading />}
      <table className="w-full overflow-y-auto  bg-white text-blue-marine rounded-lg shadow-lg shadow-black/30">
        <tbody className="divide-y divide-green-ocean">
          {currentParticipants.map((participant, key) => {
            return (
              <tr key={key}>
                <td className="p-3 text-center whitespace-nowrap ">
                  <FrameForLogoParticipants
                    urlImage={
                      participant.AuthorisationServers[0]
                        .CustomerFriendlyLogoUri
                    }
                    alt={participant.OrganisationName}
                  />
                </td>

                <td className="text-2xs md:text-sm text-left py-2">
                  {participant.OrganisationName}
                </td>

                <td className="p-3 text-center whitespace-nowrap">
                  <ParticipantsLearnMoreButton
                    AuthorisationServers={participant.AuthorisationServers}
                    OrganisationName={participant.OrganisationName}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <PaginationTable
        totalParticipants={participants.length}
        participantsPerPage={participantsPerPage}
        paginate={paginate}
      />
    </div>
  );
}
