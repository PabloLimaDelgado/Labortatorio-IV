import mongoose from "mongoose";

const taskShema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },

  descripcion: {
    type: String,
  },

  estado: {
    type: String,
    enum: ["pendiente", "en progreso", "completado"],
    default: "pendiente",
  },

  fechaLimite: {
    type: Date,
    required: true,
  },

  color: {
    type: String,
    required: true,
  },
  asignada: {
    type: Boolean,
    default: false,
  },
});

export const taskModel = mongoose.model("Task", taskShema);
