import { UserContext } from "./UserContext";
import { ReactNode } from "react";

export const UserProvider = ({ children }: { children: ReactNode }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
