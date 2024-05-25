import { createContext } from "react";

export interface UserContextType {
  UserName: string;
  UserPasswd: string;
  UserSessionNumber: number;
  UserCode: string;
}

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);
