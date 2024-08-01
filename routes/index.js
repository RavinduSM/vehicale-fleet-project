const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes");

router.use("/users", userRoutes);
// router.post("/vehicle", VehicleController.addVehicle);

module.exports = router;
