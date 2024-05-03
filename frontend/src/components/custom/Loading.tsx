import Lottie from "lottie-react";
import loading from "@/assets/loading.json";

export default function Loading() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <span className="h3 mb-0">Loading...</span>
      <div className="max-h-[300px] max-w-[400px] xl:max-h-[475px] xl:max-w-[500px]">
        <Lottie animationData={loading} />
      </div>
    </div>
  );
}
