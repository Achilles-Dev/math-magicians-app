import './App.css';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Home from './pages/Home';
import Quote from './pages/Quote';
import NotMatch from './pages/NotMatch';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          exact="true"
          path="calculator"
          element={(
            <div className="calculator-page">
              <h2>Let&apos;s do some math!</h2>
              <Calculator />
            </div>
          )}
        />
        <Route
          exact="true"
          path="quote"
          element={<Quote />}
        />
        <Route
          exact="true"
          path="/"
          element={<Home />}
        />
        <Route
          path="*"
          element={<NotMatch />}
        />
      </Routes>
    </>
  );
}

export default App;
