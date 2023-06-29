import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { addToken, addUser, changeAuth } from "../features/authSlice";
import { getUserData } from "../helpers/crud";
import axios from "axios";

export const useAuth = () => {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(["token"]);
  const { token, isAuth } = useSelector((state) => state.authData);

  // Verify if there is a token in cookies on page load
  useEffect(() => {
    const tokenFromCookies = cookies.token;

    if (tokenFromCookies) {
      // Update redux state
      dispatch(addToken(tokenFromCookies));
      dispatch(changeAuth(true));

      // Get user data
      const fetchUser = async () => {
        try {
          const userData = await getUserData("http://localhost:3000/api/users/using-token", tokenFromCookies);

          dispatch(addUser(userData));
        } catch (error) {
          console.log(error);
        }
      };

      fetchUser();
    }
  }, [cookies.token, dispatch]);

  // Sign in
  const signIn = async (credentials) => {
    try {
      const res = await axios.post("http://localhost:3000/api/auth/signin", credentials);

      // Get token
      const token = res.data.token;

      // Store token in cookies
      setCookie("token", token, { path: "/" });

      // Update auth in redux state
      dispatch(addToken(token));
      dispatch(changeAuth(true));
    } catch (error) {
      console.log("Error while signing in:", error);
    }
  };

  // Sign out
  const signOut = () => {
    // Delete token from cookies
    setCookie("token", "", { path: "/", expires: new Date(0) });

    // Clean token in redux state
    dispatch(addToken(""));

    // Change isAuth
    dispatch(changeAuth(false));
  };

  const signUp = async (credentials) => {
    try {
      const response = await axios.post("http://localhost:3000/api/auth/signup", credentials);

      // Get token
      const token = response.data.token;

      // Store token in cookies
      setCookie("token", token, { path: "/" });

      // Update auth in redux state
      dispatch(addToken(token));
      dispatch(changeAuth(true));
    } catch (error) {
      console.error("Error while signing up:", error);
      throw error;
    }
  };

  return { token, isAuth, signIn, signOut, signUp };
};
