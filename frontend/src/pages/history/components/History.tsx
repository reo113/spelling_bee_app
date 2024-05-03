import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function History() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="min-h-screen w-full">
      <div className="w-full text-center">
        <span className="h2">{currentUser.email}'s Game History</span>
      </div>
    </div>
  );
}
