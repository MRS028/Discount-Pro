import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "animate.css";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // Toastify for alerts
import "react-toastify/dist/ReactToastify.css"; // Toastify styles
import AuthProvider from "./Provider/AuthProvider"; // Authentication Context
import Router from "./Routes/Router"; // Routes Configuration

// Render the App
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router} />
      {/* Global Toastify Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </AuthProvider>
  </StrictMode>
);
