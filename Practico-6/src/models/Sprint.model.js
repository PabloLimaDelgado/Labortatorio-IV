import mongoose from "mongoose";

const sprintShema = new mongoose.Schema({
  nombre: {
    type: String,
    require: true,
  },
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
  },

  tareas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

export const sprintModel = mongoose.model("Sprint", sprintShema);
