import { AppRouter } from "./router/AppRouter";
import { store } from "../src/store/";
import { Provider } from "react-redux";

export const LacsApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
