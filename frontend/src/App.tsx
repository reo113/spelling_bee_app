import GameHub from "@/pages/misc/GameHub";
import StartGame from "@/games/components/StartGame";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <GameHub />,
    },
    {
      path: "/game/:gameType", 
      element: <StartGame />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
