import express from "express";
import {
  obtenerSuperheroePorIdController,
  obtenerTodosLosSuperheroesController,
  buscarSuperheroePorAtributoController,
  obtenerSuperheroesMayoresDe30Controller,
  agregarNuevoSuperheroeController,
  actualizarSuperheroePorIdController,
  eliminarSuperheroePorIdController,
  eliminarSuperheroePorNombreController,
  mostrarAddSuperheroController,
  mostrarEditSuperheroController,
  mostrarContactController,
  mostrarAboutController,
} from "../controllers/superheroController.mjs";
import {
  registerSuperHeroValidationRules,
  updateSuperHeroValidationRules,
} from "../validations/superHeroValidationRules.mjs";
import { handleValidationErrors } from "../middlewares/errorMiddleware.mjs";

const router = express.Router();

router.get("/heroes", obtenerTodosLosSuperheroesController);
router.get("/heroes/mayores-30", obtenerSuperheroesMayoresDe30Controller);
router.get("/heroes/buscar/:atributo/:valor", buscarSuperheroePorAtributoController);
router.get("/heroes/agregar", mostrarAddSuperheroController);
router.get("/heroes/contacto", mostrarContactController);
router.get("/heroes/acerca-de", mostrarAboutController);
router.get("/heroes/:id", obtenerSuperheroePorIdController);
router.get("/heroes/:id/editar", mostrarEditSuperheroController);
router.post(
  "/heroes/agregar",
  registerSuperHeroValidationRules,
  handleValidationErrors,
  agregarNuevoSuperheroeController
);
router.post(
  "/heroes/:id/editar",
  updateSuperHeroValidationRules,
  handleValidationErrors,
  actualizarSuperheroePorIdController
);
router.delete("/heroes/:id", eliminarSuperheroePorIdController);
router.delete(
  "/heroes/nombreSuperHeroe/:nombreSuperHeroe",
  eliminarSuperheroePorNombreController
);

export default router;
