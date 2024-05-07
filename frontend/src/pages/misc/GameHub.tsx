import { Link } from "react-router-dom";

import Navbar from "@/components/custom/Navbar";
import CustomWarning from "@/components/custom/CustomWarning";
import CustomAlert from "@/components/custom/CustomAlert";
import { SpellCheck, Ear, MousePointerClick } from "lucide-react";

import { useTranslation } from "react-i18next";

const GameHub = () => {
  const { t } = useTranslation("common");

  const games = [
    {
      id: 1,
      name: t("games.definition.title"),
      description: t("games.definition.description"),
      icon: <SpellCheck className="h-32 w-32" />,
      link: "/game/definition",
    },
    {
      id: 2,
      name: t("games.audio.title"),
      description: t("games.audio.description"),
      icon: <Ear className="h-32 w-32" />,
      link: "/game/audio",
    },
    {
      id: 3,
      name: t("games.sentence.title"),
      description: t("games.sentence.description"),
      icon: <MousePointerClick className="h-32 w-32" />,
      link: "/game/sentence",
    },
  ];

  return (
    <>
      <div className="min-h-screen w-full overflow-hidden">
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-gray-100 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(228,165,7,0.3),rgba(255,255,255,0))]"></div>
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Gamehub */}
        <div className="flex w-full items-center justify-center py-12">
          <div className="mx-auto px-4">
            <div className="mb-6 text-center">
              <span className="text-4xl font-bold text-gray-800">
                {t("games.select")}
              </span>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-x-6 gap-y-6 lg:flex-row">
              {games.map((game, index) => (
                <div
                  key={index}
                  className="relative w-[300px] overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl sm:w-[350px] md:w-[400px]"
                >
                  <div className="grid h-64 w-full place-items-center bg-gray-100">
                    {game.icon}
                  </div>

                  <div className="p-6">
                    <h2 className="mb-3 text-2xl font-bold text-gray-800">
                      {game.name}
                    </h2>
                    <p className="mb-3 text-gray-600">{game.description}</p>
                    {game.id === 2 || game.id === 3 ? (
                      <CustomWarning />
                    ) : (
                      <CustomAlert />
                    )}
                  </div>

                  <Link to={game.link}>
                    <div className="w-full cursor-pointer rounded-b-lg bg-bee px-4 py-2 text-center font-bold text-white transition-colors hover:bg-darkbee">
                      {t("games.play")}
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
