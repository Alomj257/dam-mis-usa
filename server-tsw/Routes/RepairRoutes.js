const {
  CreateRepairRequest,
  updateRepairById,
  deleteRepair,
  getById,
  getAllRepairs,
  getAllRepairRequests,
  assginRepairToMechanics,
  getAllAssignMechanics,
  acceptRequestByMechanics,
  repairComplete,
  getAllappointmentsByDriver,
} = require("../Controller/RepairController");
const { Driver, Admin, mechanics } = require("../Middlewares/VerifyRole");

const RepairRoutes = require("express").Router();
//  book appointment
RepairRoutes.post("/", Driver, CreateRepairRequest);
//  update appointment
RepairRoutes.put("/:id", updateRepairById);
RepairRoutes.delete("/:id", deleteRepair);
RepairRoutes.get("/:id", getById);
RepairRoutes.get("/driver/:driverId", getAllappointmentsByDriver);
RepairRoutes.get("/", getAllRepairs);
//give appointment to mechanics id
RepairRoutes.post("/requests/assign/:repairId", Admin, assginRepairToMechanics);
//  get appointments to mechanics id
RepairRoutes.get(
  "/requests/assign/:mechanicsId",

  getAllAssignMechanics
);

//  accept appointment by mechanics
RepairRoutes.post(
  "/requests/accept/:repairId",
  mechanics,
  acceptRequestByMechanics
);
//  reject appointment by mechanics
RepairRoutes.post(
  "/requests/reject/:repairId",
  mechanics,
  acceptRequestByMechanics
);
RepairRoutes.post("/complete/:id", mechanics, repairComplete);

module.exports = RepairRoutes;
