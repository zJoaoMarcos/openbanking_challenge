import { useState } from "react";
import { useParticipants } from "../../hooks/useParticipants";
import { FrameForLogoParticipants } from "../FrameForLogoParticipants/Index";
import { PaginationTable } from "../PaginationTable/Index";
import { ParticipantsLearnMoreButton } from "../ParticipantsLearnMoreButton/Index";

export function ParticipantsTable() {
  const { participants, wantedParticipant } = useParticipants();
  const [currentPage, setCurrentPage] = useState(1);
  const [participantsPerPage] = useState(17);

  const indexOfLastParticipant = currentPage * participantsPerPage;
  const indexOfFirstPost = indexOfLastParticipant - participantsPerPage;
  const currentParticipants = participants.slice(
    indexOfFirstPost,
    indexOfLastParticipant
  );
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="w-full flex flex-col items-end gap-2">
      <table className="w-full overflow-y-aut border-spacing-2 bg-white text-blue-marine rounded-lg shadow-lg shadow-black/30">
        <tbody>
          {currentParticipants
            .filter((participant) => {
              if (wantedParticipant == null) {
                return participant;
              } else if (
                participant.LegalEntityName.toLocaleLowerCase().includes(
                  wantedParticipant.toLocaleLowerCase()
                )
              ) {
                return participant;
              }
            })
            .map((participant, key) => {
              return (
                <tr key={key}>
                  <td className="p-3 text-center whitespace-nowrap border-b border-green-ocean/80">
                    <FrameForLogoParticipants
                      urlImage={
                        participant.AuthorisationServers[0]
                          .CustomerFriendlyLogoUri
                      }
                      alt={participant.OrganisationName}
                    />
                  </td>

                  <td className="text-2xs md:text-sm text-left py-2 whitespace-nowrap border-b border-green-ocean/80">
                    {participant.OrganisationName}
                  </td>

                  <td className="p-3 text-center whitespace-nowrap border-b border-green-ocean/80">
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
