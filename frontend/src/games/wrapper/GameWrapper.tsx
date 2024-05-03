import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Button } from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import Summary from "../components/Summary";

const GameWrapper = ({ game, gameType, onGameOver }) => {
  const [currentQuestion, setCurrentQuestion] = useState(
    game.getGameState().question
  );
  const [audioInput, setAudioInput] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const showModal = () => setIsModalVisible(true);


  const hideModal = () => {
    setIsModalVisible(false);
    navigate("/games")
  };

const handleChange = (e) => { 
  setAudioInput(e.target.value);
  console.log("audio input",audioInput); 
}

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log("submitting")
  handleAnswer(audioInput, currentQuestion);
  setAudioInput("");
  console.log("submitted"); 
}

  const handleAnswer = (answer, currentQuestion) => {
    console.log("handle answer is called");
    game.answerQuestion(answer === currentQuestion.answer.word);
    if (game.getGameState().gameOver) {
      // onGameOver();
      // alert(`Game Over! Your final score is ${game.points}`);
      // navigate("/games");
      showModal();
    } else {
      setCurrentQuestion(game.getGameState().question);
    }

    console.log("handle answer is done");
  };

  useEffect(() => {
    // if(game.getGameState().gameOver && !isModalVisible){
    //   onGameOver();
    //   setIsModalVisible(true);
    // }
    setCurrentQuestion(game.getGameState().question);
  }, [game]);


  return (
    <div className="relative">
      <div className={`transition-opacity duration-300 ${isModalVisible ? 'opacity-50' : 'opacity-100'}`}>
        {gameType === "definition" && (
          <div>
            <h1>{gameType.toUpperCase()} Game</h1>
            <Header points={game.getGameState().points} userId={null} lives={game.getGameState().lives} />
            <div>Question: {currentQuestion.answer.definition}</div>
            <ul>
              {currentQuestion.words.map((word, index) => (
                <li key={index}>
                  <Button variant={"outline"} className="mb-4" onClick={() => handleAnswer(word, currentQuestion)}>
                    {word}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {gameType === "audio" && (
          <div>
            <h1>{gameType.toUpperCase()} Game</h1>
            <Header points={game.getGameState().points} userId={null} lives={game.getGameState().lives} />
            <form onSubmit={handleSubmit}>
              <Button type="button" onClick={(e) => {
                e.stopPropagation();
                game.playAudio();
              }}>Play Audio</Button>
              <Input type="text" placeholder="Type the word you heard" value={audioInput} onChange={handleChange} />
              <Button type="submit">Submit</Button>
            </form>
          </div>
        )}
        {gameType === "sentence" && (
          <div>
            <h1>{gameType.toUpperCase()} Game</h1>
            <Header points={game.getGameState().points} userId={null} lives={game.getGameState().lives} />
            <div>Question: {game.hideWordFromSentence()}</div>
            <ul>
              {currentQuestion.words.map((word, index) => (
                <li key={index}>
                  <Button variant={"outline"} className="mb-4" onClick={() => handleAnswer(word, currentQuestion)}>
                    {word}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <Summary game={game} hideModal={hideModal}  />
        </div>
      )}
    </div>
  );
};

export default GameWrapper;
