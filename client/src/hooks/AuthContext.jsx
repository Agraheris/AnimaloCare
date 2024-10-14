import { createContext, useContext, useState, useMemo, useEffect} from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    try {
      const json = JSON.parse(localStorage.auth)
      setAuth(json)
    } catch (error) {
      console.error(error)
    }
  }, [])

 
  const value = useMemo(() => {
    const setAuthStorage = (newAuth) => {
      localStorage.auth = JSON.stringify(newAuth);
      setAuth(newAuth);
    }
    return ({ auth, setAuth: setAuthStorage });
  }, [auth, setAuth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth non définit");
  }
  return context;
}
