import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import FoodsIndex from './pages/FoodsIndex';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/food' element={<FoodsIndex />} />
      </Routes>
      {/* <Home /> */}
    </>
  );
}

export default App;
