import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

interface IAuthContext {
  auth?: {};
  login?: () => void;
  signup?: () => void;
}

const AuthContext = createContext<IAuthContext>({});

export function AuthContextProvider({ children }: PropsWithChildren) {
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState({});

  function login() {}
  function signup() {}

  useEffect(() => {}, []);

  return <AuthContext.Provider value={{ auth, login }}>{!loading && children}</AuthContext.Provider>;
}

export const useAuthContext = () => useContext(AuthContext);
