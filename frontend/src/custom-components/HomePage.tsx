import LoginButton from "./Login";
import LogoutButton from "./Logout";
export default function HomePage() {
  return (
    <>
      {" "}
      <div className="flex flex-col items-center justify-center h-screen">
        <LoginButton />
        <LogoutButton />
        <h1 className="text-4xl font-bold">Welcome to the homepage!</h1>
      </div>
    </>
  );
}
