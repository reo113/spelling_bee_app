import {
  DefinitionGameClass,
  AudioGameClass,
  SentenceGameClass,
} from "./gameClass";

class GameFactory {
  static createGame(type: string, data) {
    switch (type) {
      case "definition":
        return new DefinitionGameClass(data);
      case "audio":
        return new AudioGameClass(data);
      case "sentence":
        return new SentenceGameClass(data);
      default:
        throw new Error("Unknown game type");
    }
  }
}
export default GameFactory;
