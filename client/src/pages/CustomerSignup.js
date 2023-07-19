import { useState } from "react"
import { useCustomerSignup } from "../hooks/useCustomerSignup"
import CustomerNavbar from "../components/common/CustomerNavbar"
const CustomerSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const {signup, error, isLoading} = useCustomerSignup()
  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(name,email, password)
  }
  return (
    <form  onSubmit={handleSubmit} >
    <p></p><br/><br/><br/><br/><br/>
    <div className="h-10 d-flex align-items-center justify-content-center">
    <div class="shadow p-3 mb-5 bg-body rounded">   
      <div class="card text-white bg-dark" style={{maxWidth: "20"}} >
    <fieldset style={{marginBlock: "10"}} >
    <div class="card-header text-center ">Customer Signup</div>
    <div class="card-body">
        <div className="w-150 p-3"> 
        <div className="form-group mt-2 ">  
          <label className="form-label mt-3">Name</label>
          <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter Your Name"/>
        </div>
        <div className="form-group mt-2 ">  
          <label className="form-label mt-3">Email address</label>
          <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter Email"/>
        </div>
        <div className="form-group">
          <label className="form-label mt-3">Password</label>
          <input type="password" className="form-control"    onChange={(e) => setPassword(e.target.value)}   value={password}      placeholder="Password"/>
        </div>
      </div>
    <div class="text-center">
        <button disabled={isLoading}  class="btn btn-light active">Signup</button>
        {error && <div  style={{textAlign: 'center'}}  className="card text-dark bg-warning">{error}</div>}
        </div>
      </div>
      </fieldset>
      </div>
      </div>
      </div>
    </form>
    
    

    
//     <body style={{ alignContent: 'center' , justifyContent: 'center' }}>
      

//     <form style={{ marginTop: 120 ,marginLeft: 650 , marginRight:500 ,borderRadius: 20 , borderStyle: 'solid' ,  boxSizing: 'border-box' , height: 500 , padding : 20 , width : 320}} className="customersignup" onSubmit={handleSubmit}>
//      <head>
//           <link rel="stylesheet" href="./index.css"></link>

//         </head>
//       <h3 style={{textAlign: 'center'}}>Customer Sign Up</h3>
//       <div style={{textAlign:'center'}} >
//       <label  >Email address:</label>
//       <input
//         type="email"
//         onChange={(e) => setEmail(e.target.value)}
//         value={email} />
//         </div>


//         <br></br>

// <div style={{textAlign: 'center'}} >
//       <label>Password:</label>

//       <input
//         type="password"
//         onChange={(e) => setPassword(e.target.value)}
//         value={password} />
//         </div>
//         <br></br>

// <div style={{textAlign: 'center'}} > <button  disabled={isLoading}  >Sign up</button> </div>

//       {error && <div  style={{textAlign: 'center'}}  className="error">{error}</div>}
//     </form>





//     </body>


    // <form className="customersignup" onSubmit={handleSubmit}>
    //   <h3>Sign Up</h3>
      
    //   <label>Email address:</label>
    //   <input 
    //     type="email" 
    //     onChange={(e) => setEmail(e.target.value)} 
    //     value={email} 
    //   />
    //   <label>Password:</label>
    //   <input 
    //     type="password" 
    //     onChange={(e) => setPassword(e.target.value)} 
    //     value={password} 
    //   />

    //   <button disabled={isLoading}>Sign up</button>
    //   {error && <div className="error">{error}</div>}
        

    // </form>
    
  )
}

export default CustomerSignup