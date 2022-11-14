import { Footer } from "../components/Footer/Index";
import { Header } from "../components/Header/Index";
import { Heading } from "../components/Heading/Index";
import { ParticipantsTable } from "../components/ParticipantsTable/Index";
import { SearchParticipant } from "../components/SearchParticipant/Index";
import { useAuth } from "../contexts/authProvider";

export function Participants() {
  const { user } = useAuth();

  return (
    <div className="w-auto h-full flex flex-col items-center bg-gray-100">
      <Header user={user?.name} />

      <div className="w-full h-full flex flex-col px-5 sm:px-8 md:px-32 lg:px-52 my-8 md:my-10 sm:mt-8 gap-3">
        <Heading className="text-md sm:text-xl md:text-2xl text-blue-marine">
          Instituições
        </Heading>

        <SearchParticipant />

        <ParticipantsTable />
      </div>

      <Footer />
    </div>
  );
}
