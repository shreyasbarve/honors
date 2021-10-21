const mongoose = require("mongoose");

const validator = require("validator/validator");

const customerSchema = new mongoose.Schema({
  // id: {
  //   type: Number,
  //   required: true,
  //   unique: true,
  //   // this validator
  //   validate(value) {
  //     if (value < 0) throw new Error("Id cannot be negative");
  //   },
  //   // or this validator
  //   validate: {
  //     validator: (value) => {
  //       return value.length < 0
  //     }
  //   }
  // },
  first_name: {
    type: String,
    required: [true, "Mandatory Field"],
    unique: true,
    uppercase: true,
    trim: true,
    minLength: [3, "Minimum 3 letters"],
    maxLength: 30,
  },
  last_name: { type: String, required: true },
  gender: {
    type: String,
    required: true,
    lowercase: true,
    // enum: {
    //   value: ["male", "female"],
    //   message: "{VALUE} is not supported",
    // },
  },
  // validator package check
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Enter a valid email");
      }
    },
  },
});

module.exports = mongoose.model("Customer", customerSchema);
