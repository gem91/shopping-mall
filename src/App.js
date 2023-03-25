

import './App.css';
import { Outlet } from 'react-router-dom';
import HeaderNav from 'components/Header/HeaderNav';

function App() {
  return (
    <>
      <HeaderNav />
      <Outlet />
    </>
  );
}

export default App;
