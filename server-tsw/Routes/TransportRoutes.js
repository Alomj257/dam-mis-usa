const {
  Createtransport,
  updatetransportById,
  deletetransport,
  getById,
  getAlltransports,
  getAllTransportByUser,
} = require("../Controller/TransportatioController");

const TransportRoutes = require("express").Router();

TransportRoutes.post("/", Createtransport);
TransportRoutes.put("/:id", updatetransportById);
TransportRoutes.delete("/:id", deletetransport);
TransportRoutes.get("/:id", getById);
TransportRoutes.get("/", getAlltransports);
TransportRoutes.get("/user/:userId", getAllTransportByUser);

module.exports = TransportRoutes;
