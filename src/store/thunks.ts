import { Dispatch } from "redux";
import { loggingWithEmailPassword } from "../firebase/providers";
import { checkingCredencials, login, logout } from "./authSlice";

export const startLogginUser = (name: string, password: string) => {
  const displayName = name.toLowerCase().replace(" ", ".");
  const email = `${displayName}@unas.edu.pe`;

  return async (dispatch: Dispatch) => {
    dispatch(checkingCredencials());
    const response = await loggingWithEmailPassword({ email, password });
    const { ok, errorMessage } = response;
    if (!ok) {
      dispatch(logout({ errorMessage }));
      return;
    }
    dispatch(login({ ...response }));
  };
};
