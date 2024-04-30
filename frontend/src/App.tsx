import Login from "@/pages/auth/components/Login";
import Register from "@/pages/auth/components/Register";
import GameHub from "@/pages/misc/GameHub";
import AuthProvider from "@/contexts/AuthContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
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
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
