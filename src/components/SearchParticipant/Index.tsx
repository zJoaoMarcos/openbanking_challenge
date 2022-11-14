import { MagnifyingGlass } from "phosphor-react";
import { useParticipants } from "../../hooks/useParticipants";
import { TextInput } from "../TextInput/Index";

export function SearchParticipant() {
  const { searchParticipant } = useParticipants();
  return (
    <TextInput.Root>
      <TextInput.Icon>
        <MagnifyingGlass size={24} color="#9e9e9e" />
      </TextInput.Icon>
      <TextInput.Input
        placeholder="Pesquisar..."
        onChange={(event) => {
          searchParticipant(event.target.value);
        }}
      />
    </TextInput.Root>
  );
}
