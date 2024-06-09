import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/custom/Navbar";
import { SpellCheck, Ear, MousePointerClick } from "lucide-react";

import Lottie from "lottie-react";
import bee from "@/assets/bee.json";

import { useTranslation } from "react-i18next";

export default function LandingPage() {
  const { t } = useTranslation("common");

  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-gray-100">
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <div className="flex w-full items-center justify-center overflow-hidden py-24">
        <div className="flex flex-col items-center justify-center space-y-8 p-4 sm:flex-row sm:space-x-10">
          <div className="h-[300px] w-[300px] xl:h-[450px] xl:w-[450px]">
            <Lottie animationData={bee} />
          </div>

          {/* Text and Buttons Container */}
          <div className="flex flex-col items-center space-y-4">
            <span className="mb-4 max-w-[350px] text-center text-3xl font-bold text-gray-800 sm:max-w-[600px] sm:text-4xl">
              {t("app.title")}
            </span>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link to="/games">
                <Button
                  variant="primary"
                  className="min-w-48 rounded-lg px-5 py-8 text-lg font-bold text-white"
                >
                  {t("app.start")}
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  variant="secondary"
                  className="flex min-w-48 items-center justify-center rounded-lg px-5 py-8 text-lg font-bold text-white"
                >
                  {t("app.login")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex h-screen w-full items-center justify-center bg-none px-5 py-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between space-y-5 md:flex-row md:space-y-0">
          <div className="md:w-1/2">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              Discover a New Way to Learn Languages
            </h2>
            <p className="text-xl text-gray-600">
              The{" "}
              <span className="font-bold text-green-500">Spelling Bee app</span>{" "}
              revitalizes vocabulary learning with{" "}
              <span className="font-bold text-purple-500">
                interactive gaming
              </span>
              . It merges{" "}
              <span className="font-bold text-blue-500">
                traditional competition
              </span>{" "}
              with modern{" "}
              <span className="font-bold text-orange-500">gamification</span>,
              making learning{" "}
              <span className="font-bold text-yellow-500">fun</span> and{" "}
              <span className="font-bold text-red-500">engaging</span>. Users
              can <span className="font-bold text-teal-500">compete</span>,{" "}
              <span className="font-bold text-indigo-500">track progress</span>,
              and{" "}
              <span className="font-bold text-pink-500">
                enhance their vocabulary
              </span>{" "}
              across multiple languages, all within an{" "}
              <span className="font-bold text-lime-500">
                immersive experience
              </span>
              .
            </p>
          </div>

          <div className="mx-4 flex justify-center md:w-1/2">
            <img
              src="https://educationalendeavors.org/wp-content/uploads/2018/02/foreign-languages.jpg"
              alt="Learning Languages"
              className="rounded-lg  shadow-lg md:w-full"
            />
          </div>
        </div>
      </div> */}

      {/* Games */}
      <div className="flex w-full flex-col items-center justify-center gap-y-6 bg-none py-12 sm:py-24 md:py-36">
        <div className="flex max-w-4xl flex-col items-center justify-between md:flex-row md:gap-x-12">
          <div className="grid h-64 w-full place-items-center rounded-lg border-2 border-bee bg-gray-200 md:mr-5 md:w-1/2">
            <SpellCheck className="h-32 w-32" />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="mb-3 text-2xl font-bold text-gray-800">
              Choose the Correct Word
            </h3>
            <p className="text-gray-600">
              Select the correct word that matches the given definition. This
              game tests your vocabulary and understanding of word meanings.
            </p>
          </div>
        </div>

        <div className="flex max-w-4xl flex-col items-center justify-between md:flex-row-reverse md:gap-x-12">
          <div className="grid h-64 w-full place-items-center rounded-lg border-2 border-bee bg-gray-200 md:mr-5 md:w-1/2">
            <Ear className="h-32 w-32" />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="mb-3 text-2xl font-bold text-gray-800">
              Spell by Hearing
            </h3>
            <p className="text-gray-600">
              Listen to the audio and try to spell the word just by hearing it.
              This game enhances your listening and spelling skills.
            </p>
          </div>
        </div>

        <div className="flex max-w-4xl flex-col items-center justify-between md:flex-row md:gap-x-12">
          <div className="grid h-64 w-full place-items-center rounded-lg border-2 border-bee bg-gray-200 md:mr-5 md:w-1/2">
            <MousePointerClick className="h-32 w-32" />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="mb-3 text-2xl font-bold text-gray-800">
              Complete the Sentence
            </h3>
            <p className="text-gray-600">
              Choose the word that best fits into the provided sentence. This
              game improves your grammar and sentence construction skills.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-200 bg-none p-8">
        <div className="flex flex-row items-center justify-between lg:container lg:mx-auto">
          <p className="text-sm dark:text-white">
            &copy; 2024 Spelling Bee App. All rights reserved.
          </p>
          <div>🐝</div>
        </div>
      </footer>
    </div>
  );
}
