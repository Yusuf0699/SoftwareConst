import { useAuthContext } from './useAuthContext'
export const useStaffLogout = () => {
  const { dispatch } = useAuthContext()
  const stafflogout = () => {
    localStorage.removeItem('staff')
    {<a href="/">  </a> }
    dispatch({ type: 'STAFFLOGOUT' })
  }

  return { stafflogout }
}