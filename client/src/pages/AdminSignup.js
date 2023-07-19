import { useState } from "react"
import { useAdminSignup } from "../hooks/useAdminSignup"
import AdminNavbar from "../components/common/AdminNavbar"
const AdminSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [aname, setAname] = useState('')
  const {signup, error, isLoading} = useAdminSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(aname,email, password)
  }



  return (
//     <body style={{ alignContent: 'center' , justifyContent: 'center' }}>
      

//     <form style={{ marginTop: 120 ,marginLeft: 650 , marginRight:500 ,borderRadius: 20 , borderStyle: 'solid' ,  boxSizing: 'border-box' , height: 500 , padding : 20 , width : 320}} className="adminsignup" onSubmit={handleSubmit}>
//      <head>
//           <link rel="stylesheet" href="./index.css"></link>

//         </head>
//       <h3 style={{textAlign: 'center'}}>Admin Sign Up</h3>
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
    <form  onSubmit={handleSubmit} >
<p></p>
<br/>
<br/>
<br/>
<br/>
<br/>
<div className="h-10 d-flex align-items-center justify-content-center">
<div class="shadow p-3 mb-5 bg-body rounded">   
  <div class="card text-white bg-dark" style={{maxWidth: "20"}} >
<fieldset style={{marginBlock: "10"}} >
<div class="card-header text-center ">Admin Signup</div>
<div class="card-body">
    <div className="w-150 p-3"> 
    <div className="form-group mt-2 ">  
      <label className="form-label mt-3">Name</label>
      <input type="text" className="form-control" onChange={(e) => setAname(e.target.value)} value={aname} placeholder="Enter your name"/>
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
    <button disabled={isLoading}  class="btn btn-light active">Sign Up</button>
    {error && <div  style={{textAlign: 'center'}}  className="card text-dark bg-warning">{error}</div>}
    </div>
  </div>
  </fieldset>
  </div>
  </div>
  </div>
</form>





  )
  
}

export default AdminSignup