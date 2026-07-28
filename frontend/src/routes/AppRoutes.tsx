import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SiginUpPage";
import NotFound from "../pages/NotFound";
import EmailVerification from "../pages/EmailVerification";
import AdminLayout from "../layouts/AdminPageLayout";
import Dashboard from "../pages/admin/Dashboard";
import AddDoctor from "../pages/admin/doctors/AddDoctors";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="api/verify" element={<EmailVerification />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="doctors/add" element={<AddDoctor />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}