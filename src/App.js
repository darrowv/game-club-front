import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import PersonalArea from "./components/pages/PersonalArea";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Bar from "./components/pages/Bar/Bar";
import { store } from "./redux/configureStore";
import BookingPage from "./components/carts/booking/BookingPage";

function App() {
  const {id} = useParams()
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
            <Route path="/booking" element={<BookingPage/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;