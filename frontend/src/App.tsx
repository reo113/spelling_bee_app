import Login from "@/pages/auth/components/Login";
import Register from "@/pages/auth/components/Register";

import LandingPage from "@/pages/misc/LandingPage";
import GameHub from "@/pages/misc/GameHub";

import StartGame from "@/games/components/StartGame";

import History from "@/pages/history/components/History";
import GameHistory from "@/pages/history/components/GameHistory";

import AuthProvider from "@/contexts/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import common_en from "./translations/en/common.json";
import common_es from "./translations/es/common.json";

function App() {
  i18next.init({
    interpolation: { escapeValue: false },
    lng: "en",
    resources: {
      en: {
        common: common_en,
      },
      es: {
        common: common_es,
      },
    },
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/games",
      element: <GameHub />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/game/:gameType",
      element: <StartGame />,
    },
    {
      path: "/history",
      element: (
        <ProtectedRoute>
          <History />
        </ProtectedRoute>
      ),
    },
    {
      path: "/history/:gameId",
      element: (
        <ProtectedRoute>
          <GameHistory />
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <AuthProvider>
      <I18nextProvider i18n={i18next}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </AuthProvider>
  );
}

export default App;
