import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useCustomerLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (email, password,rewardPoints) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/customers/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password , rewardPoints })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the customers to local storage
      localStorage.setItem('customer', JSON.stringify(json))
      window.location.href ="/clogin"

      // update the auth context
      dispatch({type: 'CUSTOMERLOGIN', payload: json})

      // update loading state
      setIsLoading(false)
    }
  }

  return { login, isLoading, error }
}