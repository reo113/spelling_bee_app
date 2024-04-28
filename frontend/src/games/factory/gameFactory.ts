import DefinitionGame from './gameClass';
import AudioGame from './gameClass';
import SentenceGame from './gameClass';

class GameFactory {
    static createGame(type: string, data) {
        switch (type) {
            case 'definition':
                return new DefinitionGame(data);
            case 'audio':
                return new AudioGame(data);
            case 'sentence':
                return new SentenceGame(data);
            default:
                throw new Error('Unknown game type');
        }
    }
}
export default GameFactory;