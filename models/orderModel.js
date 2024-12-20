import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.ObjectId,
      ref: "User",
      required: true, 
    },
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Products",
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
    },
    status: {
      type: String,
      default: "Not process",
      enum: ["Not Process", "Processing", "Shipped"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
