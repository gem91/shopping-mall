

import './App.css';
import { Outlet } from 'react-router-dom';
import HeaderNav from 'components/Header/HeaderNav';
import { AuthContextProvider } from 'components/context/AuthContext';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <HeaderNav />
        <Outlet />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
