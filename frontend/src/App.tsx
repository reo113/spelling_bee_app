import HomeScreen from "./pages/misc/HomeScreen";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import GameScreen from "./components/custom/games/DefinitionGame";
// import AudioGameScreen from "./AudioGame";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
