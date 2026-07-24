import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <Toaster
        position="top-right"
        gutter={12}
        reverseOrder={false}
        toastOptions={{
          duration: 3000,

          style: {
            background: "var(--surface)",
            color: "var(--text)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            boxShadow: "0 8px 24px var(--shadow)",
            padding: "14px 18px",
            fontSize: "14px",
            fontWeight: "500",
          },

          success: {
            iconTheme: {
              primary: "var(--success)",
              secondary: "#fff",
            },
          },

          error: {
            iconTheme: {
              primary: "var(--danger)",
              secondary: "#fff",
            },
          },

          loading: {
            iconTheme: {
              primary: "var(--primary)",
              secondary: "#fff",
            },
          },
        }}
      />
      <AppRoutes />
    </>
  )
}

export default App
