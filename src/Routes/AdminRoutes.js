import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import useAdmin from '../hooks/useAdmin'
import Spinner from '../Pages/Shared/Spinner/Spinner'


const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const [isAdmin,isAdminLoading ] = useAdmin(user?.email);
  const location = useLocation()
  console.log(loading)
  if (loading || isAdminLoading) {
    return (
      <div className='h-screen'>
        <Spinner></Spinner>
      </div>
    )
  }

  if (user && isAdmin) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace />
}

export default AdminRoutes;
