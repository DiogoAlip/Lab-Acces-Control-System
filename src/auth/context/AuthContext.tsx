import { createContext } from "react";
import { AuthContextType } from "./authInterface";
export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});
