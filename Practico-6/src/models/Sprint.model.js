import mongoose from "mongoose";

const sprintShema = new mongoose.Schema({
  fechaInicio: {
    type: Date,
    require: true,
  },
  fechaFin: {
    type: Date,
    require: true,
  },
  color: {
    type: String,
    require: true,
  },

  tareas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

export const sprintModel = mongoose.model("Sprint", sprintShema);
