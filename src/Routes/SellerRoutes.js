import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import useSeller from '../hooks/useSeller'
import Spinner from '../Pages/Shared/Spinner/Spinner'


const SellerRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const [isSeller,isSellerLoading ] = useSeller(user?.email);
  const location = useLocation()
  console.log(loading)
  if (loading || isSellerLoading) {
    return (
      <div className='h-screen'>
        <Spinner></Spinner>
      </div>
    )
  }

  if (user && isSeller) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace />
}

export default SellerRoutes;