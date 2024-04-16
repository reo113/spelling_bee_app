import AuthenticationButton from '../custom/buttons/AuthenticatedButton';
const NavBar = () => {
    return (
      <div className="nav-container mb-3">
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container">
            <div className="navbar-brand logo" />
                <AuthenticationButton />
          </div>
        </nav>
      </div>
    );
  };
  
  export default NavBar;