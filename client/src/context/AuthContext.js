


import { createContext, useReducer, useEffect } from 'react'
export const AuthContext = createContext()
export const authReducer = (state, action) => {
  switch (action.type) {
    case 'CUSTOMERLOGIN':
      return {  customer: action.payload   
    }
    case 'CUSTOMERLOGOUT':
      return {  customer: null


    }

    case 'STAFFLOGIN':
      return { 
                staff: action.payload
    }

    case 'STAFFLOGOUT':
      return { 
                staff: null
                
    }

    case 'ADMINLOGIN':
      return {  
                admin: action.payload
               
    }

    case 'ADMINLOGOUT':
      return {  
                admin: null
            
    }


    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { 
    customer: null,
    admin: null,
    staff: null
  })

  useEffect(() => {
    const customer = JSON.parse(localStorage.getItem('customer'))

    if (customer) {
      dispatch({ type: 'CUSTOMERLOGIN', payload: customer }) 
    }
  }, [])





  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem('admin'))

    if (admin) {
      dispatch({ type: 'ADMINLOGIN', payload: admin }) 
    }
  }, [])

  useEffect(() => {
    const staff = JSON.parse(localStorage.getItem('staff'))

    if (staff) {
      dispatch({ type: 'STAFFLOGIN', payload: staff }) 
    }
  }, [])
  

  console.log('AuthContext state:', state)
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}