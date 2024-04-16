
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
import SignUpButton from "./SignUpButton"
import { useAuth0 } from "@auth0/auth0-react"

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="">
      {!isAuthenticated && (
        <>
          <SignUpButton />
          <LoginButton />
        </>
      )}
      {isAuthenticated && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
};

  
  export default AuthenticationButton;