import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/user.jsx";
import { TaskProvider } from "./contexts/cards.jsx";
import { ThemesProvider } from "./contexts/theme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemesProvider>
        <UserProvider>
          <TaskProvider>
            <App />
          </TaskProvider>
        </UserProvider>
      </ThemesProvider>
    </React.StrictMode>
  </BrowserRouter>
);
