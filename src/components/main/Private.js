import React, {useContext} from 'react'
import Context from '../../Context'
import { Outlet, useLocation, Navigate } from 'react-router-dom'

export default function Private() {
  const {user} = useContext(Context)

  if(!user) {
    return <Navigate to="/" />
  }
  return (
    <div className='container1'>
      <Outlet />
    </div>
  )
}
