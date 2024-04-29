const {
  createField,
  updateField,
  deleteField,
  getFieldById,
  getAllFields,
  getFieldByOwners,
  getFieldByMatainer,
} = require("../Controller/FieldController");

const FieldRoutes = require("express").Router();

FieldRoutes.post("/", createField);
FieldRoutes.put("/:id", updateField);
FieldRoutes.delete("/:id", deleteField);
FieldRoutes.get("/:id", getFieldById);
FieldRoutes.get("/", getAllFields);
FieldRoutes.get("/owner/:ownerId", getFieldByOwners);
FieldRoutes.get("/matainer/:maintainerId", getFieldByMatainer);

module.exports = FieldRoutes;
