
class DefinitionGame  {
    constructor(data) {
        this.data= data;
        this.currentIndex = 0;
        this.points = 0;
        this.lives = 3;
        this.gameOver = false;
        this.results = [];
    }
    getCurrentQuestion() {
        return this.data[this.currentIndex];
    }
    answerQuestion(isCorrect) {
        if (isCorrect) {
            this.points += 10;
            this.results.push({ correct: true });
            console.log("Correct Answer")
            //playSound('correct');
        } else {
            this.lives -= 1;
            this.results.push({ correct: false });
            console.log("Incorrect Answer")
            //playSound('incorrect');
            if (this.lives === 0) {
                this.endGame();
            }
        }

        this.nextQuestion();
    }
    nextQuestion() {
        if (this.currentIndex < this.data.length - 1 && !this.gameOver) {
            this.currentIndex++;
        } else {
            this.endGame();
        }
    }
    endGame() {
        this.gameOver = true;
        console.log('Game Over - Your final score is:', this.points);
    }
    resetGame() {
        this.currentIndex = 0;
        this.points = 0;
        this.lives = 3;
        this.gameOver = false;
    }
    getGameState() {
        return {
            question: this.getCurrentQuestion(),
            points: this.points,
            lives: this.lives,
            gameOver: this.gameOver,
            index: this.currentIndex
        };
    }
}

class AudioGame extends DefinitionGame {
    playAudio() {
        const audioUrl = this.getCurrentQuestion().audio;
        console.log('Playing audio:', this.currentIndex)
        const audio = new Audio(audioUrl);
        audio.play();
    }
}

class SentenceGame extends DefinitionGame {
    hideWordFromSentence() {
        const currentSentence = this.getCurrentQuestion().answer.example.replace(this.getCurrentQuestion().answer.word, '_____');
        return currentSentence.trim();
    }
}

export default DefinitionGame;
export { AudioGame, SentenceGame };
