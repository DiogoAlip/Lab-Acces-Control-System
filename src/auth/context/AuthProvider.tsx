import { AuthContext } from "./AuthContext";
import { ReactNode, useState } from "react";
export const AuthProvider = ({
  children,
  userName,
  userPassword,
}: {
  children: ReactNode;
  userName: string;
  userPassword: string;
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [ActualUserName, setUserName] = useState(userName);
  const [ActualUserPasswd, setUserPaswd] = useState(userPassword);
  const login = (newUserName: string, newPasswd: string) => {
    setIsAuthenticated(true);
    setUserName(newUserName);
    setUserPaswd(newPasswd);
  };
  const logout = () => {
    setIsAuthenticated(false);
    setUserName("");
    setUserPaswd("");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        userName: ActualUserName,
        userPassword: ActualUserPasswd,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
