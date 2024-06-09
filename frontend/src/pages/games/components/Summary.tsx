import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";

import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Gem, ArrowRight } from "lucide-react";

import { useTranslation } from "react-i18next";

export default function Summary({ game, hideModal }) {
  const { currentUser } = useContext(AuthContext);
  const { t } = useTranslation("common");

  const points = game.points;
  const lives = game.lives;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="flex min-h-[300px] w-full max-w-sm flex-col justify-between rounded-lg bg-white p-5 shadow-lg sm:min-h-[350px] sm:max-w-md">
        <div className="">
          <span className="text-2xl font-bold">{t("summary.title")}</span>
          <div className="justify-content-center mt-2 flex flex-row items-center gap-x-2">
            <span className="text-xl">
              {t("summary.score") + ": " + points}
            </span>
          </div>
          <div className="justify-content-center mt-2 flex flex-row items-center gap-x-2">
            <span className="text-xl">{lives + " " + t("summary.lives")} </span>
          </div>
        </div>
        {currentUser === null ? (
          <Alert>
            <Gem className="h-5 w-5" />
            <AlertTitle>{t("summary.notification")}</AlertTitle>
            <AlertDescription>{t("summary.register")}</AlertDescription>
            <Link to="/register">
              <Button variant="outline" className="px-4 py-4">
                {t("app.signup")} <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </Alert>
        ) : (
          <Alert>
            <Gem className="h-5 w-5" />
            <AlertTitle>{t("summary.notification")}</AlertTitle>
            <AlertDescription>{t("summary.history")}</AlertDescription>
            <Link to="/history">
              <Button variant="outline" className="px-4 py-4">
                {t("app.history")} <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </Alert>
        )}
        <Button
          onClick={hideModal}
          variant="primary"
          className="flex h-[50px] w-full items-center justify-center rounded-xl text-[16px] font-bold uppercase"
        >
          {t("summary.close")}
        </Button>
      </div>
    </div>
  );
}
