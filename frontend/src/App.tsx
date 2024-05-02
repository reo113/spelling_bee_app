import Login from "@/pages/auth/components/Login";
import Register from "@/pages/auth/components/Register";
import LandingPage from "@/pages/misc/LandingPage";
import GameHub from "@/pages/misc/GameHub";
import AuthProvider from "@/contexts/AuthContext";
import StartGame from "@/games/components/StartGame";

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
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
