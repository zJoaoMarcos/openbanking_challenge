import { api } from "../services/api";

export const authApi = () => ({
  signIn: async (email: string, password: string) => {
    try {
      const response = await api.post("/auth", {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      return error;
    }
  },
});
