import { UserLoginReducer } from "./UserLoginReducer";
import { useReducer } from "react";
import { userInterface } from "./userInterface";

export const useUserLogin = (intialUser: userInterface) => {
  const [UserLogin, UserLoginDispatch] = useReducer(UserLoginReducer, {
    ...intialUser,
  } as userInterface);

  const onSetNameUserLogin = (name: string) => {
    UserLoginDispatch({ type: "SET NAME", payload: name });
  };
  const onSetPasswdUserLogin = (passwd: string) => {
    UserLoginDispatch({ type: "SET PASSWD", payload: passwd });
  };
  const onSetUserLogin = ({ name, passwd }: userInterface) => {
    UserLoginDispatch({ type: "SET USER", payload: { name, passwd } });
  };

  return {
    UserLogin,
    onSetNameUserLogin,
    onSetPasswdUserLogin,
    onSetUserLogin,
  };
};
