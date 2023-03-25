

import './App.css';
import { Outlet } from 'react-router-dom';
import HeaderNav from 'components/Header/HeaderNav';
import { AuthContextProvider } from 'components/context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <HeaderNav />
      <Outlet />
    </AuthContextProvider>
  );
}

export default App;
