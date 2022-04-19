import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Stock from './components/Stock';
import { store } from './redux/configureStore';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/stock' element={<Stock />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
