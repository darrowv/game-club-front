import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import News from "./components/pages/news/News";
import OneNew from "./components/pages/news/OneNew";
import Bar from "./components/pages/Bar/Bar";
import { store } from "./redux/configureStore";
import Contacts from "./components/pages/Contacts/Contacts";
import BookingPage from "./components/carts/booking/BookingPage";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path='/news' element={<News/>}/>
            <Route path='/news/:id' element={<OneNew/>}/>
            <Route path="/cafe" element={<Bar />} />
            <Route path="/cafe/:categoryId" element={<Bar />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/booking" element={<BookingPage/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;