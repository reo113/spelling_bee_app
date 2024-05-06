import { CheckCheck } from "lucide-react";

import { Alert, AlertDescription } from "@/components/ui/alert";

export default function CustomAlert() {
  return (
    <Alert
      variant="default"
      className="border-green-500 text-green-500 [&>svg]:text-green-500"
    >
      <CheckCheck className="h-4 w-4" />
      <AlertDescription>Supported in English and Spanish.</AlertDescription>
    </Alert>
  );
}
