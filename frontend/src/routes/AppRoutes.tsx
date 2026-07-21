import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SiginUpPage";
import NotFound from "../pages/NotFound";
import EmailVerification from "../pages/EmailVerification";
import HomePage from "../pages/HomePage";

export default function AppRoutes() {
  return (
  <>
  <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path ="api/verify" element ={<EmailVerification />} />
      <Route path = "" element ={<HomePage />} />

      <Route path="*" element={<NotFound />} />
    </Routes></>
    
  );
}