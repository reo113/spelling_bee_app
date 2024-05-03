import { Link } from "react-router-dom";

import Navbar from "@/components/custom/Navbar";

const games = [
  {
    id: 1,
    name: "Word Choices",
    description: "Choose the correct word that matches the definition.",
    imageUrl:
      "https://st2.depositphotos.com/3051589/45390/i/450/depositphotos_453901934-stock-photo-definition-business-team-hands-work.jpg",
    link: "/game/definition",
  },
  {
    id: 2,
    name: "Spell by Hearing",
    description: "Listen and spell the word correctly to win points!",
    imageUrl:
      "https://lh7-us.googleusercontent.com/we6R_SypPk-Efe7BujABImnIV1MJJRdJ_4DM8xR__aLZ23uJDLBAtZrh2cZWP2uVvHuAn4EsGNq5k-KNvyWIoLznTT9h3jKq3IE_vkdD7WiPwQ4oXdGHhVne0ZKMYdqTnLe0iDUwrL62",
    link: "/game/audio",
  },
  {
    id: 3,
    name: "Complete the Sentence",
    description: "Fill in the blanks to complete the sentence correctly.",
    imageUrl:
      "https://tophat.com/wp-content/uploads/BLOG-fill-in-the-blank@1X.jpg",
    link: "/game/sentence",
  },
];

const GameHub = () => {
  return (
    <>
      <div className="min-h-screen w-full overflow-hidden">
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-gray-100 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(228,165,7,0.3),rgba(255,255,255,0))]"></div>
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Gamehub */}
        <div className="flex w-full items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="my-8 text-center">
              <span className="text-4xl font-bold text-gray-800">
                Select Your Game
              </span>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {games.map((game) => (
                <div
                  key={game.id}
                  className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl"
                >
                  <img
                    src={game.imageUrl}
                    alt={game.name}
                    className="h-64 w-full object-cover"
                  />

                  <div className="p-6">
                    <h2 className="mb-3 text-2xl font-bold text-gray-800">
                      {game.name}
                    </h2>
                    <p className="text-gray-600">{game.description}</p>
                  </div>

                  <Link to={game.link}>
                    <div className="w-full cursor-pointer rounded-b-lg bg-bee px-4 py-2 text-center font-bold text-white transition-colors hover:bg-darkbee">
                      Play Now
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameHub;
