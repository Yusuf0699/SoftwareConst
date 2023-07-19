require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./db");
const staffRoutes = require("./routes/staffRoutes");
const itemRoutes = require("./routes/itemRoutes");
const tableRoutes = require("./routes/tableRoutes");
const customerRoutes = require("./routes/customerRoutes");
const adminRoutes = require("./routes/adminRoutes");
 const promotionsRoutes = require("./routes/promotionsRoutes");
 const reserveRoutes = require("./routes/reserveRoutes");
const orderRoutes = require("./routes/orderRoutes");
const app = express();
const PORT = process.env.PORT || 8090;
connection();
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
	res.locals.path = req.path;
	next();
});
app.use("/api/staffs", staffRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/tables", tableRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/admins", adminRoutes);
app.use("/api/reserves", reserveRoutes);
app.use("/api/promotions", promotionsRoutes);
app.use("/api/orders", orderRoutes);







// Generate QR code and update table reservation status
const generateQRCodeAndUpdateReservation = async (tableId) => {
	try {
	  // Find the table document by tableId
	  const table = await Table.findOne({ TableId: tableId });
  
	  if (!table) {
		throw new Error('Table not found');
	  }
  
	  // Update the isReserved field to true
	  table.isReserved = true;
	  await table.save();
  
	  // Generate QR code from the updated table data
	  const tableJson = JSON.stringify(table);
	  const qrCodeData = await qrcode.toDataURL(tableJson);
  
	  return qrCodeData;
	} catch (error) {
	  console.error('QR Code generation error:', error);
	  throw error;
	}
  };
  
  module.exports = generateQRCodeAndUpdateReservation;






app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));