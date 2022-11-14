import { Envelope, Lock, User } from "phosphor-react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authProvider";
import { api } from "../../services/api";
import { AnimationLoading } from "../Animation.Loading/Index";
import { Button } from "../Button/Index";
import { Text } from "../Text/Index";
import { TextInput } from "../TextInput/Index";

export function FormRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const { signIn } = useAuth();

  async function handleRegister(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    await api
      .post("/register", {
        name,
        email,
        password,
      })
      .then((data) => navigate("/"))
      .catch((err) => {
        setIsLoading(false);
        setError(true);
      });
  }

  return (
    <>
      {isLoading ? (
        <AnimationLoading />
      ) : (
        <form
          onSubmit={handleRegister}
          className="w-full flex flex-col items-stretch gap-3"
        >
          <label htmlFor="email" className="flex flex-col gap-3">
            <p className="text-xs">Nome</p>
            <TextInput.Root>
              <TextInput.Icon>
                <User size={32} color="#9e9e9e" />
              </TextInput.Icon>
              <TextInput.Input
                type="text"
                id="name"
                placeholder="José"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </TextInput.Root>
          </label>

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
                onChange={(event) => setEmail(event.target.value)}
                placeholder="example@email.com"
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
                placeholder="************"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </TextInput.Root>
          </label>
          {error && (
            <Text className="text-2xs text-red-300">
              não foi possivel criar sua conta, tente outra vez.
            </Text>
          )}

          <Button type="submit" className="mt-4">
            Cadastrar
          </Button>
        </form>
      )}
    </>
  );
}
