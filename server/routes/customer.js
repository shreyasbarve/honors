const express = require("express");
const Customer = require("../models/customer.model.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find()
      .sort({ first_name: 1 })
      .countDocuments();
    res.json(customers);
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const customer = await Customer.findById(id);
    res.json(customer);
  } catch (error) {
    res.send(error.message);
  }
});

router.post("/", async (req, res) => {
  const newCustomer = new Customer({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    gender: req.body.gender,
  });
  try {
    const c1 = newCustomer.save();
    res.send(c1);
  } catch (error) {
    res.send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  const newCustomer = req.body;
  const { id: _id } = req.params;
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      _id,
      { ...newCustomer, _id },
      { new: true }
    );
    res.json(updatedCustomer);
  } catch (error) {
    res.send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    const c1 = await customer.delete();
    res.json(c1);
  } catch (error) {
    res.send(error.message);
  }
});

// searching query
const getDocuments = async () => {
  try {
    // const result = await Customer.find({ gender: { $in: ["Male", "tst"] } });
    // const result = await Customer.find({
    //   $and: [{ gender: "male" }, { first_name: "DEEP" }],
    // });
    // const result = await Customer.find({ gender: { $nin: ["Male", "tst"] } });
    // const result = await Customer.select({ first_name: 1 });
    // const result = await Customer.limit(1);
    // const result = await Customer.sort({ first_name: 1 });
    // const result = await Customer.countDocuments();
    // const result = await Customer.aggregate([
    // const result = await Customer.aggregate([
    //   { $group: { _id: "$gender", Total: { $sum: 1 } } },
    // ]);
    //   { $group: { _id: "$gender", maxAge: { $max: "$age" } } },
    // ]);
    // const result = await Customer.aggregate([
    //   { $group: { _id: "$gender", minAge: { $min: "$age" } } },
    // ]);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

module.exports = router;
