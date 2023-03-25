import React from 'react';
import { useAuthContext } from 'components/context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRouter = ({children, requireAdmin}) => {
  const { user } = useAuthContext(); 

  if( !user || (requireAdmin && !user.isAdmin) ){ // admin을 요구하고(requireAdmin) isAdmin이 아니면
    return <Navigate to="/" replace /> // replace넣는 이유는 잘못된 경로로 히스토리를 안남길려고
  }
  return children;
};

export default ProtectedRouter;