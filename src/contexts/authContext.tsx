import { createContext } from "react";
import { User } from "../types/User";

type AuthContextData = {
  signed: boolean;
  user: User | null;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut(): void;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);
