import { CheckCheck } from "lucide-react";

import { Alert, AlertDescription } from "@/components/ui/alert";

import { useTranslation } from "react-i18next";

export default function CustomAlert() {
  const { t } = useTranslation("common");

  return (
    <Alert
      variant="default"
      className="border-green-500 text-green-500 [&>svg]:text-green-500"
    >
      <CheckCheck className="h-4 w-4" />
      <AlertDescription>{t("games.alert")}</AlertDescription>
    </Alert>
  );
}
