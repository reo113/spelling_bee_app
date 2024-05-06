import { TriangleAlert } from "lucide-react";

import { Alert, AlertDescription } from "@/components/ui/alert";

import { useTranslation } from "react-i18next";

export default function CustomWarning() {
  const { t } = useTranslation("common");

  return (
    <Alert
      variant="default"
      className="border-yellow-500 text-yellow-500 [&>svg]:text-yellow-500"
    >
      <TriangleAlert className="h-4 w-4" />
      <AlertDescription>{t("games.warning")}</AlertDescription>
    </Alert>
  );
}
