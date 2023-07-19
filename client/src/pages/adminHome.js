import Footer from "../components/common/Footer"
import { useAuthContext } from "../hooks/useAuthContext"
import AdminNavbar from "../components/common/AdminNavbar"
const AdminHome = () => {

	const { admin } = useAuthContext()


  return (

    <><AdminNavbar/>
<main role="main">
<div class="bg-light"  >
{/* style={{backgroundColor: "#E6E6FA"}} */}
    <div class="container">
      <h1 class="display-3">Hello, Mr. {admin.anamee}!</h1>
      <p>you are the admin you can manage your staff, customers, items, and view orders from this website by interacting with the given pages
        </p>
      <p>
        you can also create unique and exclusive promotions and rewards for VIP customers
      </p>
    </div>
</div>


  <div class="container-fluid bg-light">
    <div class="row">
      <div class="col-md-4">
        <h2>Customers</h2>
        <p>View and Manage Your Customers and their Reward Points
        </p>
        <p>
          <a class="btn btn-dark" href="/customers" role="button">View Customers &raquo;</a>
        </p>
      </div>
      <div class="col-md-4">
        <h2>Staff</h2>
        <p>View and Manage Your Staff Roles in the Restaurant
        </p>
        <p>
          <a class="btn btn-dark" href="staffs" role="button">View Staff &raquo;</a>
        </p>
      </div>
      <div class="col-md-4">
        <h2>Needed Items</h2>
        <p>This Page Tells Which Items Need Refilling.</p>
        <p>
          <a class="btn btn-dark" href="/pages/dailyneededitems" role="button">View Needed Items &raquo;</a>
        </p>
      </div>

      <div class="col-md-4">
        <h2> Add Promotions</h2>
        <p>This Page Gives You The Freedom To Add New Promotions</p>
        <p>
          <a class="btn btn-dark" href="/admins/adminpromotions" role="button">Make New Promotions&raquo;</a>
        </p>
      </div>

      
      <div class="col-md-4">
        <h2>Item View</h2>
        <p>View And Manage Your Items</p>
        <p>
          <a class="btn btn-dark" href="/items" role="button">Manage Items&raquo;</a>
        </p>
      </div>

      {/* <div class="col-md-4">
        <h2>Items Grid View</h2>
        <p>This Page Gives You The Same As The Previous One But On A Different View</p>
        <p>
          <a class="btn btn-dark" href="/items/grid-view" role="button">Items Grid View&raquo;</a>
        </p>
      </div> */}

      <div class="col-md-4">
        <h2>Restaurant Tables</h2>
        <p>View Existing Tables And What Tables Are Reserved</p>
        <p>
          <a class="btn btn-dark" href="/tables" role="button">Manage Tables&raquo;</a>
        </p>
      </div>

      <div class="col-md-4">
        <h2>Reserved Tables</h2>
        <p>This Page Shows You The Reservations Made By Customers</p>
        <p>
          <a class="btn btn-dark" href="/admins/reservedtables" role="button"> View Reserved Tables&raquo;</a>
        </p>
      </div>

      
      <div class="col-md-4">
        <h2>Customer Orders</h2>
        <p>This Shows You The Orders Made By Customers</p>
        <p>
          <a class="btn btn-dark" href="/admins/vieworder/" role="button"> View Orders &raquo;</a>
        </p>
      </div>






    </div>

    <hr/>

  </div>

</main>

<footer class="container-fluid bg-light">
  <p>  Phone: +6016-3255283  </p>
  <p> Email: marketing@woodfire.com.my</p>
  <p> Operating Hours</p>
  <p> Tuesday - Saturday 12:00 - 21.30 </p>
  <p>  (Closed Monday) </p>


</footer>




</>
  


  )
}

export default AdminHome


//   to="/tables"

//   to="/tables/grid-view"
// >
//   Grid View Tables
// </NavLink>
// </li>