import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import { TextInput } from "../../components/TextInput/Index";
import { useAuth } from "../../contexts/authProvider";
import { Button } from "../Button/Index";

export function FormLogin() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    signIn(email, password);
  }

  return (
    <form
      onSubmit={handleLogin}
      className="w-full flex flex-col items-stretch gap-3 mt-10"
    >
      <label htmlFor="email" className="flex flex-col gap-3">
        <p className="text-xs">Endereço de e-mail</p>
        <TextInput.Root>
          <TextInput.Icon>
            <Envelope size={32} color="#9e9e9e" />
          </TextInput.Icon>
          <TextInput.Input
            type="email"
            id="email"
            value={email}
            placeholder="example@email.com"
            onChange={(event) => setEmail(event.target.value)}
          />
        </TextInput.Root>
      </label>

      <label htmlFor="email" className="flex flex-col gap-3">
        <p className="text-xs">Sua senha</p>
        <TextInput.Root>
          <TextInput.Icon>
            <Lock size={32} color="#9e9e9e" />
          </TextInput.Icon>
          <TextInput.Input
            type="password"
            id="password"
            value={password}
            placeholder="************"
            onChange={(event) => setPassword(event.target.value)}
          />
        </TextInput.Root>
      </label>

      <Button type="submit" className="mt-4">
        Entrar na plataforma
      </Button>
    </form>
  );
}
