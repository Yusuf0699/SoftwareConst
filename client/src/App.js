import React from "react";
import { BrowserRouter as Router, Route, Routes , Navigate } from "react-router-dom";
import "./App.css";
import { useAuthContext } from "./hooks/useAuthContext";
import AdminNavbar from "./components/common/AdminNavbar";
import Home from "./components/pages/Home";
import StaffAdd from "./components/staffs/StaffAdd";
import StaffTable from "./components/staffs/StaffTable";
// import StaffListView from "./components/staffs/StaffListView";
// import StaffGridView from "./components/staffs/StaffGridView";
import StaffDetails from "./components/staffs/StaffDetails";
import StaffEdit from "./components/staffs/StaffEdit";
import StaffDelete from "./components/staffs/StaffDelete";
import ItemAdd from "./components/items/ItemAdd";
import ItemTable from "./components/items/ItemTable";
// import ItemListView from "./components/items/ItemListView";
import ItemGridView from "./components/items/ItemGridView";
import ItemDetails from "./components/items/ItemDetails";
import ItemEdit from "./components/items/ItemEdit";
import ItemDelete from "./components/items/ItemDelete";
import TableAdd from "./components/tables/TableAdd";
import TableTable from "./components/tables/TableTable";
// import TableListView from "./components/tables/TableListView";
import TableGridView from "./components/tables/TableGridView";
import TableDetails from "./components/tables/TableDetails";
import TableEdit from "./components/tables/TableEdit";
import TableDelete from "./components/tables/TableDelete";
import Footer from "./components/common/Footer";
import DailyNeededItems from "./components/pages/DailyNeededItems";
import CustomerLogin from "./pages/CustomerLogin";
import CustomerSignup from "./pages/CustomerSignup";
import AdminLogin from "./pages/AdminLogin";
import AdminSignup from "./pages/AdminSignup";
import StaffLogin from "./pages/StaffLogin";
import StaffSignup from "./pages/StaffSignup";
import DailyPromotions from "./components/customers/DailyPromotions";
import AdminPromotions from "./components/admins/adminPromotions";
import CustomerHome from "./pages/customerHome";
import AdminHome from "./pages/adminHome";
import StaffHome from "./pages/staffHome";
import ItemCustomer from "./components/items/ItemsCustomer";
import ItemOrder from "./components/items/ItemOrder"
import CustomerTable from "./components/customers/CustomerTable";
import CustomerAdd from "./components/customers/CustomerAdd";
import CustomerDelete from "./components/customers/CustomerDelete";
import CustomerDetails from "./components/customers/CustomerDetails";
import CustomerEdit from "./components/customers/CustomerEdit";
import CustomerOrder from "./components/customers/CustomerOrder";
import CustomerReserve from "./components/tables/CustomerReserve";
import ViewOrder from "./components/admins/ViewOrders";
import ReservedTables from "./components/admins/ReservedTables";
import Temp from "./components/items/temp";
import AHome from "./components/pages/AHome";
import CHome from "./components/pages/CHome";
import SHome from "./components/pages/SHome";
import CustomerViewOrders from "./components/customers/CustomerViewOrder";
function App() {
		const {customer} = useAuthContext()
		const {staff} = useAuthContext()
		const {admin} = useAuthContext()





	return (
		<div className="App">
			<Router>
				{/* <AdminNavbar /> */}
				<Routes>
				

					<Route exact path="/" element={<Home />}/>
					<Route exact path="/cview" element={<CustomerViewOrders />}/>
					<Route exact path="/chome" element={!customer ? <CHome />:<Navigate to="/customerhome" />}/>
					<Route exact path="/ahome" element={!admin ?  <AHome />: <Navigate to="/adminhome"/>  }  />
					<Route exact path="/shome" element={!staff ? <SHome />: <Navigate to="/staffhome"/>   }/>
					{/* <Route exact path="/customerhome" element={customer ? <CustomerHome />:<Navigate to="/" />}/>  
					<Route exact path="/staffhome" element={staff ? <StaffHome /> :<Navigate to="/" />     } />
					<Route exact path="/adminhome" element={admin ?<AdminHome /> :<Navigate to="/" /> } />
 */}



					{/* <Route exact path="/temp" element={<Temp />}/> */}
					{/* <Route exact path="/customerhome" element={customer ? <CustomerHome />:<Navigate to="/" />}/>   */}
					<Route exact path="/pages/dailyneededitems" element={ <DailyNeededItems />} />
					<Route exact path="/customers/customerorder" element={ <CustomerOrder />} />
					<Route exact path="/customers/dailypromotions" element={<DailyPromotions />}/>
					{/* <Route exact path="/admins/adminpromotions" element={admin  ? <AdminPromotions/>: <Navigate to="/" />}/> */}
					<Route exact path="/admins/adminpromotions" element={<AdminPromotions/>}/>
					<Route exact path="/api/" element={<Home />} />
					<Route exact path="/staffs" element={<StaffTable />} />					
					<Route exact path="/customers" element={<CustomerTable />} />				
					{/* <Route exact path="/staffs/list-view" element={<StaffListView />} />
					<Route exact path="/staffs/grid-view" element={<StaffGridView />} /> */}
					<Route exact path="/staffs/new" element={<StaffAdd />} />
					<Route exact path="/staffs/:_id" element={<StaffDetails />} />
					<Route exact path="/staffs/:_id/edit" element={<StaffEdit />} />
					<Route exact path="/staffs/:_id/delete" element={<StaffDelete />} />
					<Route exact path="/customers/new" element={<CustomerAdd />} />
					<Route exact path="/customers/:_id" element={<CustomerDetails />} />
					<Route exact path="/customers/:_id/edit" element={<CustomerEdit />} />
					<Route exact path="/customers/:_id/delete" element={<CustomerDelete />} />
					<Route exact path="/reserve" element={<CustomerReserve/>} />
					<Route exact path="/admins/vieworder" element={<ViewOrder/>} />
					<Route exact path="/admins/reservedtables" element={<ReservedTables/>} />
					<Route exact path="/items" element={<ItemTable />} />					
					{/* <Route exact path="/items/list-view" element={<ItemListView />} /> */}
					<Route exact path="/items/grid-view" element={<ItemGridView />} />
					<Route exact path="/items/new" element={<ItemAdd />} />
					<Route exact path="/items/:_id" element={<ItemDetails />} />
					<Route exact path="/items/:_id/edit" element={<ItemEdit />} />
					<Route exact path="/items/:_id/delete" element={<ItemDelete />} />
					<Route exact path="/items/:_id/order" element={<ItemOrder />} />
					<Route exact path="/items/itemcustomer" element={<ItemCustomer />} />
					<Route exact path="/clogin" element={!customer ? <CustomerLogin />:<Navigate to="/customerhome"  />} />
					<Route exact path="/csignup" element={!customer ? <CustomerSignup />:<Navigate to="/customerhome"  />} />
					<Route exact path="/alogin" element={!admin ? <AdminLogin />:<Navigate to="/adminhome"  />} />
					<Route exact path="/asignup" element={!admin ? <AdminSignup />:<Navigate to="/adminhome"  />} />
					<Route exact path="/slogin" element={!staff ? <StaffLogin />:<Navigate to="/staffhome"  />} />
					<Route exact path="/ssignup" element={!staff ? <StaffSignup />:<Navigate to="/staffhome"  />} />
					{/* <Route exact path="/pages/dailypromotions" element={customer ? <DailyPromotions />: <Navigate to="/" />}/> */}
					<Route exact path="/tables" element={<TableTable />} />					
					{/* <Route exact path="/tables/list-view" element={<TableListView />} /> */}
					<Route exact path="/tables/grid-view" element={<TableGridView />} />
					<Route exact path="/tables/new" element={<TableAdd />} />
					<Route exact path="/tables/:_id" element={<TableDetails />} />
					<Route exact path="/tables/:_id/edit" element={<TableEdit />} />
					<Route exact path="/tables/:_id/delete" element={<TableDelete />} />
					{/* <Route exact path="/pages/dailypromotions" element={customer? <DailyPromotions />: <Navigate to="/" />}/> */}
					<Route exact path="/customerhome" element={customer ? <CustomerHome />:<Navigate to="/chome" />}/>  
					<Route exact path="/staffhome" element={staff ? <StaffHome /> :<Navigate to="/shome" />     } />
					<Route exact path="/adminhome" element={admin ?<AdminHome /> :<Navigate to="/ahome" /> } />

				
				</Routes>
				

			
			</Router>
		</div>
	);
}
export default App;
