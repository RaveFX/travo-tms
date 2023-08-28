import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
//import useRefreshToken from "../src/hooks/useRefreshToken";
//import useAuth from "../src/hooks/useAuth";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
  }, []);

  return <>{isLoading ? <p>Loading ... </p> : <Outlet />}</>;
};

export default PersistLogin;
