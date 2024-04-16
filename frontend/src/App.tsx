import HomeScreen from "./components/custom/HomeScreen";
import { Route, Routes } from "react-router-dom";
// import GameScreen from "./components/custom/games/DefinitionGame";
// import AudioGameScreen from "./AudioGame";
function App() {
  return (
   <div>
    <Routes>
    <Route path="/" element={<HomeScreen/>}/>
      </Routes>
    </div>
  );
}

export default App;
