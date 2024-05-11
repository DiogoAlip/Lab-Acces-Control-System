import { userInterface } from "./userInterface";
import { Action } from "./actionInterface";

export const UserLoginReducer = (
  initialUser: userInterface,
  action: Action
) => {
  switch (action.type) {
    case "SET NAME":
      return { ...initialUser, name: action.payload as string };
    case "SET PASSWD":
      return { ...initialUser, passwd: action.payload as string };
    case "SET USER":
      return { ...(action.payload as userInterface) };
    default:
      return initialUser;
  }
};
