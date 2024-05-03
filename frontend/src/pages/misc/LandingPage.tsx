import { Link } from "react-router-dom";

// UI
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CustomDropdown from "./CustomDropdown";

export default function LandingPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden">
      <div className="sm:px-18 md:px-26 mx-auto flex w-full items-center justify-between bg-white px-4 py-6 lg:px-48 xl:px-64">
        {/* Image and Spelling Bee Text Group */}
        <div className="flex items-center">
          <img
            src="/logo.svg"
            alt="Spelling Bee Logo"
            className="h-8 w-16 sm:h-16 sm:w-32"
          />
          <span className="text-xl font-bold sm:text-2xl md:text-3xl">
            Spelling Bee App
          </span>
        </div>
        <div className="flex items-center justify-center gap-x-4">
          {/* Language Selector Dropdown */}
          <div className="hidden sm:block">
            <Select>
              <SelectTrigger className="w-[180px] border-yldark bg-yl py-6 ring-0 focus:ring-0 focus:ring-offset-0">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent className="border-yldark bg-yl">
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
                <SelectItem value="french">French</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <CustomDropdown />
        </div>
      </div>

      {/* Section 1 */}
      <div className="flex min-h-screen w-full items-center justify-center overflow-hidden bg-gray-100">
        <div className="flex flex-col items-center justify-center p-4 sm:flex-row sm:space-x-10">
          {/* Animation Container with GIF */}
          <div className="mb-4 flex items-center justify-center sm:mb-0">
            <img
              src="https://i.pinimg.com/originals/02/ce/79/02ce7945c01a4d62f78e480ca9c51f00.gif"
              alt="Bee Animation"
              className="bounce h-48 w-48 rounded-lg sm:h-64 sm:w-64"
            />
          </div>

          {/* Text and Buttons Container */}
          <div className="flex flex-col items-center space-y-4">
            <h1 className="mb-4 text-center text-3xl font-bold text-gray-800 sm:text-4xl">
              The free, fun, and <br /> effective way to learn new words!
            </h1>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link to="/games">
                <Button
                  variant="primary"
                  className="min-w-48 rounded-lg px-5 py-8 text-lg font-bold text-white"
                >
                  Get Started
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  variant="secondary"
                  className="flex min-w-48 items-center justify-center rounded-lg px-5 py-8 text-lg font-bold text-white"
                >
                  Log In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="flex h-screen w-full items-center justify-center bg-white px-5 py-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between space-y-5 md:flex-row md:space-y-0">
          {/* Mission Statement */}
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

          {/* Image */}
          <div className="mx-4 flex justify-center md:w-1/2">
            <img
              src="https://educationalendeavors.org/wp-content/uploads/2018/02/foreign-languages.jpg"
              alt="Learning Languages"
              className="rounded-lg  shadow-lg md:w-full"
            />
          </div>
        </div>
      </div>
      {/* Game Section */}
      <div className="bg-gray-100 py-10">
        {/* Game 1: Spell it by Hearing */}
        <div className="mx-4 mb-16 flex max-w-4xl flex-col items-center justify-between md:mx-auto md:flex-row ">
          <img
            src="https://media1.giphy.com/media/mgStALXN5ImLS/200w.gif?cid=6c09b952rawwumg1479aqjjot2lfw5skzsflo201ukvqqolb&ep=v1_gifs_search&rid=200w.gif&ct=g"
            alt="Spell by Hearing"
            className="mb-4 w-full rounded-lg shadow-lg md:mb-0 md:mr-5 md:w-1/2"
          />
          <div className="w-full md:w-1/2">
            <h3 className="mb-3 text-2xl font-bold text-gray-800">
              Spell it by Hearing
            </h3>
            <p className="text-gray-600">
              Listen to the audio and try to spell the word just by hearing it.
              This game enhances your listening and spelling skills.
            </p>
          </div>
        </div>

        {/* Game 2: Choose the Correct Word from Choices */}
        <div className="mx-4 mb-16 flex max-w-4xl flex-col items-center justify-between md:mx-auto md:flex-row-reverse">
          <img
            src="https://media1.giphy.com/media/26uf3kSKntUjAvauI/giphy.gif?cid=6c09b952piyxk78to4kpaps0rghzprein69uf7l0s6mqsnqf&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
            alt="Word Choices"
            className="mb-4 w-full rounded-lg shadow-lg md:mb-0 md:ml-5 md:w-1/2"
          />
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

        {/* Game 3: Fit the Word in the Sentence */}
        <div className="mx-4 mb-16 flex max-w-4xl flex-col items-center justify-between md:mx-auto md:flex-row">
          <img
            src="https://media0.giphy.com/media/3orifa47AVeoc2GciA/200w.gif?cid=6c09b952zvo4tof9f1fxemysjru2pcgndgquv106p68qc5r4&ep=v1_gifs_search&rid=200w.gif&ct=g"
            alt="Sentence Completion"
            className="mb-4 w-full rounded-lg shadow-lg md:mb-0 md:mr-5 md:w-1/2"
          />
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
      {/* Final Section */}
      <div className="bee-background bg-green-500 px-5 py-10 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">Join Our Community</h2>
        <p className="mb-6 text-xl">
          Become part of a growing community of language learners. Engage in
          fun, interactive games that boost your vocabulary skills while
          connecting with others.
        </p>
        <button className="rounded-lg bg-white px-6 py-2 font-bold text-green-500 transition-colors hover:bg-gray-200">
          Sign Up Now
        </button>

        {/* Footer Section */}
        <div className="mt-10">
          <div className="text-sm text-white">
            <p>© 2024 Spelling Bee App. All rights reserved.</p>
            <p>Follow us on:</p>
            <a
              href="#"
              className="mr-4 text-lg text-blue-500 hover:text-blue-100"
            >
              Facebook
            </a>
            <a
              href="#"
              className="mr-4 text-lg text-blue-500 hover:text-blue-100"
            >
              Twitter
            </a>
            <a href="#" className="text-lg text-blue-500 hover:text-blue-100">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
