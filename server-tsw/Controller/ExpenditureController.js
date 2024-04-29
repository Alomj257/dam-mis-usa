const Expenditure = require("../Model/Expenditure");

exports.createExpenditure = async (req, res) => {
  try {
    await new Expenditure(req.body).save();
    res.status(201).json("Expenditure create successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
exports.updateExpenditure = async (req, res) => {
  try {
    const expenditure = await Expenditure.findByIdAndUpdate(req.params.id);
    if (!expenditure) {
      res.status(404).json({ message: "Invalid Expenditure id" });
      return;
    }
    res.status(200).json("Expenditure update successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
exports.deleteExpenditure = async (req, res) => {
  try {
    const expenditure = await Expenditure.findByIdAndDelete(req.params.id);
    if (!expenditure) {
      res.status(404).json({ message: "Invalid Expenditure id" });
      return;
    }
    res.status(200).json("Expenditure delete successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
exports.getExpenditureById = async (req, res) => {
  try {
    const expenditure = await Expenditure.findById(req.params.id);
    if (!expenditure) {
      res.status(404).json({ message: "Invalid Expenditure id" });
      return;
    }
    res.status(200).json(expenditure);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
exports.getAllExpenditures = async (req, res) => {
  try {
    const expenditures = await Expenditure.find();
    res.status(200).json(expenditures);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
exports.getExpenditureByFields = async (req, res) => {
  try {
    const expenditures = await Expenditure.find({ field: req.params.fieldId });
    res.status(200).json(expenditures);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
