import Login from "@/pages/auth/components/Login";
import Register from "@/pages/auth/components/Register";

import LandingPage from "@/pages/misc/LandingPage";
import GameHub from "@/pages/misc/GameHub";

import StartGame from "@/games/components/StartGame";

import History from "@/pages/history/components/History";

import AuthProvider from "@/contexts/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
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
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
