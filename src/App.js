import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import PersonalArea from "./components/pages/PersonalArea";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Bar from "./components/pages/Bar/Bar";
import { store } from "./redux/configureStore";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile/:id" element={<PersonalArea />} />
            <Route path="/cafe" element={<Bar />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;