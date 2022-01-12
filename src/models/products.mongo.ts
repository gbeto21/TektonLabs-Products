import { Schema, model } from "mongoose";
const productSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
});

export default model("Product", productSchema);
