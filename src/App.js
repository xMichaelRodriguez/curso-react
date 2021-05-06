import { Provider } from "react-redux";
import { AppRoute } from "./routes/AppRoute";
import { store } from "./store/store";
import "./styles/bootstrap.min.css";
import "./styles/App.css";
function App() {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
}

export default App;
