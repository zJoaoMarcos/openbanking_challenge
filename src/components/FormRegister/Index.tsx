import { Envelope, Lock, User } from "phosphor-react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Button } from "../Button/Index";
import { TextInput } from "../TextInput/Index";

export function FormRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleRegister(event: FormEvent) {
    event.preventDefault();

    const response = await api.post("register", {
      name,
      email,
      password,
    });

    console.log(response);
    navigate("/");
  }

  return (
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

      <Button type="submit" className="mt-4">
        Cadastrar
      </Button>
    </form>
  );
}
