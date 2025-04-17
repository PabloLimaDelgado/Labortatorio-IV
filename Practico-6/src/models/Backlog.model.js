import mongoose from "mongoose";

const backlogShema = new mongoose.Schema({
  tareas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

export const backlogModel = mongoose.model("Backlog", backlogShema);
