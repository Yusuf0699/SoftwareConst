import { useAuthContext } from './useAuthContext'
export const useAdminLogout = () => {
  const { dispatch } = useAuthContext()
  const adminlogout = () => {
    localStorage.removeItem('admin')
    {<a href="/">  </a> }
    dispatch({ type: 'ADMINLOGOUT' })
  }

  return { adminlogout }
}