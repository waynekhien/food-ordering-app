import mongoose from "mongoose";

const UserShema = new mongoose.Schema({
  auth0Id: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  name: {
    type: String,
  },
  addressLine1: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
});

const User = mongoose.model("User", UserShema);

export default User;
