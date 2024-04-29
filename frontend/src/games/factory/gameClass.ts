
class DefinitionGame {
    constructor(data) {
        this.data = data;
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
            //playSound('correct');
        } else {
            this.lives -= 1;
            this.results.push({ correct: false });
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
            gameOver: this.gameOver
        };
    }
}

class AudioGame extends DefinitionGame {
    playAudio() {
        const audioUrl = this.getCurrentQuestion().audio;
        const audio = new Audio(audioUrl);
        audio.play();
    }

    // Override the method if specific actions needed
    answerQuestion(isCorrect) {
        super.answerQuestion(isCorrect);
    }
}

class SentenceGame extends DefinitionGame {
    checkSentence(input) {
        const currentSentence = this.getCurrentQuestion().sentence;
        return input.trim() === currentSentence.trim();
    }

    // Customize answering logic if necessary
    answerQuestion(input) {
        const isCorrect = this.checkSentence(input);
        super.answerQuestion(isCorrect);
    }
}

export default DefinitionGame;
export { AudioGame, SentenceGame };
