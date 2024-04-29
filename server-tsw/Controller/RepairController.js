const Parts = require("../Model/Parts");
const Repair = require("../Model/Repairing");
const Workshop = require("../Model/Workshop");
const User = require("../Model/user");

exports.CreateRepairRequest = async (req, res) => {
  try {
    const { driverId } = req.body;

    const repair = new Repair(req.body);
    repair.repairRequest.driverId = driverId;
    repair.status = "Pending";
    await repair.save();
    res.status(201).json("your request has been sent");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
exports.updateRepairById = async (req, res) => {
  try {
    const repair = await Repair.findById(req.params.id);
    if (!repair) {
      res.status(404).json({ message: "invalid repairing id" });
      return;
    }
    await Repair.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json("Detail updated successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.deleteRepair = async (req, res) => {
  try {
    const repair = await Repair.findById(req.params.id);
    if (!repair) {
      res.status(404).json({ message: "invalid repairing id" });
      return;
    }
    await Repair.findByIdAndDelete(req.params.id);
    res.status(201).json("Detail deleted successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getById = async (req, res) => {
  try {
    const repair = await Repair.findById(req.params.id);
    if (!repair) {
      res.status(404).json({ message: "invalid repairing id" });
      return;
    }
    res.status(201).json(repair);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getAllappointmentsByDriver = async (req, res) => {
  try {
    const repairs = await Repair.find({
      "repairRequest.driverId": req.params.driverId,
    });
    res.status(200).json(repairs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getAllRepairs = async (req, res) => {
  try {
    const repairs = await Repair.find();
    res.status(201).json(repairs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.assginRepairToMechanics = async (req, res) => {
  try {
    const repair = await Repair.findById(req.params.repairId);
    if (!repair) {
      res.status(404).json({ message: "Invalid repair id" });
      return;
    }
    repair.assignerId = req.body.assignerId;
    repair.repairRequest.isAssign = true;
    repair.repairRequest.mechanicsId = req.body.mechanicsId;
    repair.save();
    res.status(200).json("Repair assign to the mechanics successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
exports.getAllAssignMechanics = async (req, res) => {
  try {
    // console.log(req.params.mechanicsId);
    const repairs = await Repair.find({
      "repairRequest.isAssign": true,
      "acceptRepairRequest.isAccept": false,
      "repairRequest.mechanicsId": req.params.mechanicsId,
    });

    res.status(200).json(repairs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
exports.acceptRequestByMechanics = async (req, res) => {
  try {
    const repair = await Repair.findById(req.params.repairId);
    if (!repair) {
      res.status(404).json({ message: "Invalid repair id" });
      return;
    }
    const user = await User.findById(req.body.mechanicsId);
    if (!user) {
      res.status(404).json({ message: "invalid user" });
    }
    user.busySlot.push({
      startTime: req.body.startTime,
      endTime: req.body.endTime,
    });
    repair.acceptRepairRequest.isAccept = true;
    repair.status = "Confirm";
    repair.acceptRepairRequest.mechanicsId = req.body.mechanicsId;

    await repair.save();
    await user.save();
    res.status(200).json("Repair accepted");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

exports.rejectRequest = async (req, res) => {
  try {
    const { mechanicsId, reason } = req.body;
    if (!mechanicsId || !reason) {
      res.status(400).json({ message: "field empty" });
      return;
    }
    const repair = await Repair.findById(req.params.repairId);
    if (!repair) {
      res.status(404).json({ message: "Invalid repair id" });
      return;
    }
    repair.repairRequest.reject.push({ mechanicsId, reason });
    repair.status = "Cancelled";
    repair.save();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

exports.repairComplete = async (req, res) => {
  try {
    const repair = await Repair.findById(req.params.id);
    if (!repair) {
      res.status(404).json({ message: "invalid repair id" });
    }
    repair.parts = req.body.parts;
    repair.status = "Complete";
    const parts = req.body.parts;
    for (const part of parts) {
      const prt = await Parts.findById(part.id);
      prt.quantity -= part.quantity;
      await prt.save();
    }
    await repair.save();
    res.status(200).json("Your repairing done");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
