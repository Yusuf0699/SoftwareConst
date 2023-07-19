import Footer from "../components/common/Footer"
import { useAuthContext } from "../hooks/useAuthContext"
import StaffNavbar from "../components/common/StaffNavbar"
const StaffHome = () => {

  const { staff } = useAuthContext()



  return (
    <><StaffNavbar />
        <main role="main">
        <div class="bg-light"  >
          <div class="container">
            <h1 class="display-3">Hello, Mr. {staff.namee} </h1>
            <p>you are the staff you can manage items, and view orders from this website by interacting with the given pages
        </p>
      <p>
        you can also  View The Needed Items 
      </p>
          </div>
        </div>






          <div class="container-fluid bg-light">
          <div class="row">
            <div class="col-md-4">
              <h2>View Items</h2>
              <p>View And Manage Items</p>
              <p>
                <a class="btn btn-dark" href="/items" role="button">View Items &raquo;</a>
              </p>
            </div>
            <div class="col-md-4">
              <h2>Reserved Tables</h2>
          <p>This Page Shows You The Reservations Made By Customers</p>

              
              <p>
                <a class="btn btn-dark" href="admins/reservedtables" role="button">View Reserved Tables &raquo;</a>
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
              <h2>Orders </h2>
              <p>This Shows You The Orders Made By Customers</p>

              <p>
                <a class="btn btn-dark" href="/admins/vieworder" role="button">View Orders &raquo;</a>
              </p>
              
            </div>



          </div>

          <hr />

        </div>

      </main><footer class="container-fluid bg-light">
        <p>  Phone: +6016-3255283  </p>
        <p> Email: marketing@woodfire.com.my</p>
        <p> Operating Hours</p>
        <p> Tuesday - Saturday 12:00 - 21.30 </p>
        <p>  (Closed Monday) </p>


      </footer></>





  )
}

export default StaffHome
