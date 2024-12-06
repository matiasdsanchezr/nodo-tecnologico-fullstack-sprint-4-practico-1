import mongoose from "mongoose";

const superheroSchema = new mongoose.Schema(
  {
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0, required: true },
    planetaOrigen: { type: String, default: "Desconocido" },
    debilidad: { type: String, default: "Desconocida" },
    poderes: { type: [String] },
    aliados: { type: [String] },
    enemigos: { type: [String] },
    createdAt: { type: Date, default: Date.now },
    creador: { type: String, required: true },
  },
  { collection: "Grupo-05" }
);

export default mongoose.model("SuperHero", superheroSchema);
