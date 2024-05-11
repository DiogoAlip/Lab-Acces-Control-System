import { userInterface } from "./userInterface";
export interface Action {
  type: string;
  payload: string | userInterface;
}
