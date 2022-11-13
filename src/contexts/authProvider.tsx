import { useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { User } from "../types/User";
import { authApi } from "./auth";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const auth = authApi();

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = sessionStorage.getItem("@TerosAuth:user");
      const storagedToken = sessionStorage.getItem("@TerosAuth:token");

      if (storagedUser && storagedToken) {
        api.defaults.headers.common.Authorization = `Bearer ${storagedToken}`;
      }
    }
    loadStorageData();
  }, []);

  async function signIn(email: string, password: string) {
    const response = await auth.signIn(email, password);

    if (response.user && response.token) {
      setUser(response.user);
      api.defaults.headers.common.Authorization = `Bearer ${response.token}`;
      sessionStorage.setItem("@TerosAuth:user", JSON.stringify(response.user));
      sessionStorage.setItem("@TerosAuth:token", response.token);
      return true;
    }
    return false;
  }

  async function signOut() {
    sessionStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
