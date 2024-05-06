import { TriangleAlert } from "lucide-react";

import { Alert, AlertDescription } from "@/components/ui/alert";

export default function CustomWarning() {
  return (
    <Alert
      variant="default"
      className="border-yellow-500 text-yellow-500 [&>svg]:text-yellow-500"
    >
      <TriangleAlert className="h-4 w-4" />
      <AlertDescription>Only supported in English.</AlertDescription>
    </Alert>
  );
}
