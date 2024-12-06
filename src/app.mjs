import express from "express";
import { connectDb } from "./config/dbConfig.mjs";
import superHeroRoutes from "./routes/superHeroRoutes.mjs";
import { handleErrors } from "./middlewares/errorMiddleware.mjs";
import dotenv from "dotenv";
import expressEjsLayouts from "express-ejs-layouts";

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDb();

app.set("view engine", "ejs");

// Middleware para parsear JSON
app.use(express.json());

// Middleware para parsear datos de formularios
app.use(express.urlencoded({ extended: true }));

//  Middleware para montar archivos de la carpeta public
app.use(express.static("public"));

// Middleware para poder usar layouts EJS
app.use(expressEjsLayouts);

// Routes/endpoints de superhéroes
app.use("/api", superHeroRoutes);

// Manejo de errores para rutas no encontradas
app.use((req, res) => {
  res.status(404).send({ mensaje: "Ruta no encontrada" });
});

// Middleware para el manejo de errores
app.use(handleErrors);

// Inciar el servidor
app.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto", PORT);
});

// Finalizar el proceso correctamente al usar ctrl + c en linux y WSL
process.on("SIGINT", () => process.exit(1));
