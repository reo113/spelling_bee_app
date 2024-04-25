import NavBar from '../custom/NavBar'
import DefintionGame from "../custom/games/DefinitionGame";
const HomeScreen = () => {
  return (
    <div>
      <NavBar/>
      <div className="container">
        <h1>Home Screen</h1>
        <p>Welcome to the Home Screen</p>
        <DefintionGame/>
      </div>
      </div>
  )
}

export default HomeScreen