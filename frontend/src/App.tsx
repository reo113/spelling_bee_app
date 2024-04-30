import Login from "@/pages/auth/components/Login";
import Register from "@/pages/auth/components/Register";
import HomeScreen from "@/pages/misc/HomeScreen";
import AuthProvider from "@/contexts/AuthContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import GameScreen from "./components/custom/games/DefinitionGame";
// import AudioGameScreen from "./AudioGame";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />,
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
