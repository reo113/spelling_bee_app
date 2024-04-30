
import { Link } from 'react-router-dom';
const GameHub = () => {
  return (
    <div className="container">
      <h1>Game Hub</h1>
      <p>Welcome to the Game Selection</p>
      <ul>
        <li><Link to="/game/definition">Play Definition Game</Link></li>
        <li><Link to="/game/audio">Play Audio Game</Link></li>
        <li><Link to="/game/sentence">Play Sentence Game</Link></li>
      </ul>
    </div>
  );
};

export default GameHub;
