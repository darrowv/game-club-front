import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import News from "./components/pages/news/News";
import OneNew from "./components/pages/news/OneNew";
import { store } from "./redux/configureStore";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path='/news' element={<News/>}/>
            <Route path='/news/:id' element={<OneNew/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;