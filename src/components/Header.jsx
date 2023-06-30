import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useAuth } from "../hooks/useAuth";

export const Header = () => {
  const { user } = useSelector((state) => state.authData);
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut();
    navigate("/signin");
    window.location.reload();
  };

  return (
    <header className="container h-16 mx-auto border-b-2 xl:max-w-6xl border-cyan-950 text-cyan-950">
      <div className="flex items-center justify-between w-full h-full">
        <Link to="/" className="text-2xl font-bold cursor-pointer">
          pokedexApp
        </Link>
        <div className="flex items-center justify-center gap-2">
          {user ? (
            <>
              <span>{user.username}</span>
              <Button
                color="warning"
                func={(e) => {
                  e.preventDefault();
                  handleLogOut();
                }}
              >
                Log out
              </Button>
            </>
          ) : (
            <span>{"Bienvenido"}</span>
          )}
        </div>
      </div>
    </header>
  );
};
