import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./assets/Elements/ErrorPage.tsx";
import ListedBusinesses from "./assets/Pages/ListedBusinesses.tsx";
import WelcomePage from "./assets/Pages/WelcomePage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<WelcomePage />} />
          <Route path="listed-businesses" element={<ListedBusinesses />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
