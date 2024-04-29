import HomeScreen from "@/pages/misc/GameHub";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
