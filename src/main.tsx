import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./assets/Pages/ErrorPage.tsx";
import ListedBusinesses from "./assets/Pages/ListedBusinesses.tsx";
import WelcomePage from "./assets/Pages/WelcomePage.tsx";
import AboutPage from "./assets/Pages/AboutUsPage.tsx";
import AddBusinessPage from "./assets/Pages/AddBusinessPage.tsx";
import TutorialPage from "./assets/Pages/TutorialPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<WelcomePage />} />
          <Route path="listed-businesses" element={<ListedBusinesses />} />
          <Route path="about-us" element={<AboutPage />} />
          <Route path="tutorials" element={<TutorialPage />} />
          <Route path="add-business" element={<AddBusinessPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
