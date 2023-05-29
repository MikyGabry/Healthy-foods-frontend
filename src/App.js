import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import FoodsIndex from './pages/FoodsIndex';
import FoodsShow from './pages/FoodsShow';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/food'>
          <Route path='' element={<FoodsIndex />} />
          <Route path=':foodId' element={<FoodsShow />} />
        </Route>
      </Routes>
      {/* <Home /> */}
    </>
  );
}

export default App;
