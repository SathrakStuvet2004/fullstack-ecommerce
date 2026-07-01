import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}