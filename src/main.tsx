import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { GifExpertApp } from "./GifExpertApp.tsx";
import ServiceProvider from "./provider/ServiceProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ServiceProvider>
      <GifExpertApp />
    </ServiceProvider>
  </StrictMode>
);
