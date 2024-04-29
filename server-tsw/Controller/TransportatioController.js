const Transportation = require("../Model/Transportation");

exports.Createtransport = async (req, res) => {
  try {
    const transport = new Transportation(req.body);
    await transport.save();
    res.status(201).json("your transport onloaded");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
exports.updatetransportById = async (req, res) => {
  try {
    const transport = await Transportation.findById(req.params.id);
    if (!transport) {
      res.status(404).json({ message: "invalid transport id" });
      return;
    }
    await Transportation.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json("Detail updated successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.deletetransport = async (req, res) => {
  try {
    const transport = await Transportation.findById(req.params.id);
    if (!transport) {
      res.status(404).json({ message: "invalid transporting id" });
      return;
    }
    await Transportation.findByIdAndDelete(req.params.id);
    res.status(201).json("Detail deleted successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getById = async (req, res) => {
  try {
    const transport = await Transportation.findById(req.params.id);
    if (!transport) {
      res.status(404).json({ message: "invalid transporting id" });
      return;
    }
    res.status(201).json(transport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getAlltransports = async (req, res) => {
  try {
    const transports = await Transportation.find();
    res.status(201).json(transports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getAllTransportByUser = async (req, res) => {
  try {
    const transports = await Transportation.find({ userId: req.params.userId });
    res.status(200).json(transports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
