import React from "react";
import ReactDOM from "react-dom/client";
import "./UI/styles/reset.css";
import "./UI/styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GuifAffinity } from "./UI/view/home/GuifAffinity";
import { GifDetail } from "./UI/view/gifDetail/GifDetail";
import { init as initSearchMemes } from "./core/aplication/searchMemes";
import { init as initGetMeme } from "./core/aplication/getMeme";
import { apiMemeRepository } from "./core/infrastructure/apiMemeRepository";
import { UserProvider } from "./core/infrastructure/userContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

initSearchMemes(apiMemeRepository);
initGetMeme(apiMemeRepository);

root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GuifAffinity />} />
          <Route path="/home" element={<GuifAffinity />} />
          <Route path="/gif/:gifID" element={<GifDetail />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
