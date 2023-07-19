import { useAuthContext } from './useAuthContext'
// import { useWorkoutsContext } from './useWorkoutsContext'

export const useCustomerLogout = () => {
  const { dispatch } = useAuthContext()
  // const { dispatch: dispatchWorkouts } = useWorkoutsContext()

  const customerlogout = () => {
    // remove customer from storage
    localStorage.removeItem('customer')
    {<a href="/">  </a> }
    // dispatch logout action
    dispatch({ type: 'CUSTOMERLOGOUT' })
    // dispatchWorkouts({ type: 'SET_WORKOUTS', payload: null })
  }

  return { customerlogout }
}