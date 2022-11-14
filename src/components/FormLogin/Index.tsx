import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import { TextInput } from "../../components/TextInput/Index";
import { useAuth } from "../../contexts/authProvider";
import { AnimationLoading } from "../Animation.Loading/Index";
import { Button } from "../Button/Index";
import { Text } from "../Text/Index";

export function FormLogin() {
  const { signIn, isLoading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    await signIn(email, password);
  }

  return (
    <>
      {isLoading ? (
        <AnimationLoading />
      ) : (
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
          {error && (
            <Text className="text-2xs text-red-300">
              E-mail ou senha incorreta
            </Text>
          )}

          <Button type="submit" className="mt-4">
            Entrar na plataforma
          </Button>
        </form>
      )}
    </>
  );
}
