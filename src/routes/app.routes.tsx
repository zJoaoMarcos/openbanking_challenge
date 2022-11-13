import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TransactionsProvider } from "../hooks/useParticipants";
import { Participants } from "../pages/Participants";

export function AppRoutes() {
  return (
    <TransactionsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Participants />} />
        </Routes>
      </BrowserRouter>
    </TransactionsProvider>
  );
}
