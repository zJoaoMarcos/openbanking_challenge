import { AuthProvider } from "./contexts/authProvider";
import { Routes } from "./routes/routes";
import "./styles/main.css";

export function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
