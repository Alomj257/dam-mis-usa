const Field = require("../Model/Field");

exports.createField = async (req, res) => {
  try {
    await new Field(req.body).save();
    res.status(201).json("field create successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
exports.updateField = async (req, res) => {
  try {
    const field = await Field.findByIdAndUpdate(req.params.id);
    if (!field) {
      res.status(404).json({ message: "Invalid field id" });
      return;
    }
    res.status(200).json("field update successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
exports.deleteField = async (req, res) => {
  try {
    const field = await Field.findByIdAndDelete(req.params.id);
    if (!field) {
      res.status(404).json({ message: "Invalid field id" });
      return;
    }
    res.status(200).json("field delete successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
exports.getFieldById = async (req, res) => {
  try {
    const field = await Field.findById(req.params.id);
    if (!field) {
      res.status(404).json({ message: "Invalid field id" });
      return;
    }
    res.status(200).json(field);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
exports.getAllFields = async (req, res) => {
  try {
    const fields = await Field.find();
    res.status(200).json(fields);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
exports.getFieldByOwners = async (req, res) => {
  try {
    const fields = await Field.find({ owner: req.params.ownerId });
    res.status(200).json(fields);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
exports.getFieldByMatainer = async (req, res) => {
  try {
    const fields = await Field.find({ maintainer: req.params.maintainerId });
    res.status(200).json(fields);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
