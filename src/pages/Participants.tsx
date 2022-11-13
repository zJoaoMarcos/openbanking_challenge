import { Header } from "../components/Header/Index";
import { Heading } from "../components/Heading/Index";
import { LogoWhite } from "../components/LogoWhite/Index";
import { ParticipantsTable } from "../components/ParticipantsTable/Index";
import { SearchParticipant } from "../components/SearchParticipant/Index";
import { Text } from "../components/Text/Index";
import { useAuth } from "../contexts/authProvider";

export function Participants() {
  const { user } = useAuth();

  return (
    <div className="w-full h-full flex flex-col items-center bg-gray-100">
      <Header user={user?.name} />

      <div className="w-full h-full flex flex-col px-5 sm:px-8 md:px-32 lg:px-52 my-4 sm:mt-8 gap-3">
        <Heading className="text-md sm:text-xl md:text-2xl text-blue-marine">
          Instituições
        </Heading>

        <SearchParticipant />

        <ParticipantsTable />
      </div>

      <footer className="w-full flex flex-col items-center py-4 gap-2 bg-blue-marine shadow-lg shadow-black/40">
        <LogoWhite />
        <Text asChild>
          <a
            href="https://github.com/zJoaoMarcos"
            target="_blank"
            className="text-gray-200 underline transition-colors hover:text-gray-100"
          >
            &copy; Developed by João Marcos
          </a>
        </Text>
      </footer>
    </div>
  );
}
