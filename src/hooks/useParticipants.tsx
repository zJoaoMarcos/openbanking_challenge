import { AxiosError } from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

export interface Participants {
  OrganizationId: string;
  OrganisationName: string;
  LegalEntityName: string;
  AuthorisationServers: [
    {
      AuthorisationServerId: string;
      ApiResources: [
        {
          ApiResourceId: string;
          ApiFamilyType: string;
        }
      ];
      CustomerFriendlyDescription: string;
      CustomerFriendlyLogoUri: string;
    }
  ];
}

interface ParticipantsProviderProps {
  children: ReactNode;
}

interface ParticipantsContextData {
  isLoading: boolean;
  participants: Participants[];
  wantedParticipant: string | null;
  searchParticipant: (participant: string) => void;
}

const ParticipantsContext = createContext<ParticipantsContextData>(
  {} as ParticipantsContextData
);

export function TransactionsProvider({ children }: ParticipantsProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [participants, setParticipants] = useState<Participants[]>([]);
  const [wantedParticipant, setWantedParticipant] = useState<string | null>(
    null
  );

  useEffect(() => {
    api
      .get("/participants")
      .then((response) => setParticipants(response.data))
      .catch((err: AxiosError) => console.log(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  async function searchParticipant(participant: string) {
    setWantedParticipant(participant);
  }

  return (
    <ParticipantsContext.Provider
      value={{ isLoading, participants, wantedParticipant, searchParticipant }}
    >
      {children}
    </ParticipantsContext.Provider>
  );
}

export function useParticipants() {
  const context = useContext(ParticipantsContext);

  return context;
}
