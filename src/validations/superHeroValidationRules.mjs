import { checkSchema } from "express-validator";

export const registerSuperHeroValidationRules = checkSchema({
  nombreSuperHeroe: {
    exists: { errorMessage: "Se requiere el nombre de superhéroe", bail: true },
    isString: { errorMessage: "Debe ser una cadena de caracteres" },
    trim: true,
    escape: true,
    isLength: {
      options: { min: 3, max: 60 },
      errorMessage: "Debe poseer entre 3 y 60 caracteres",
    },
  },
  nombreReal: {
    exists: { errorMessage: "Se requiere el nombre real", bail: true },
    isString: { errorMessage: "Debe ser una cadena de caracteres" },
    trim: true,
    escape: true,
    isLength: {
      options: { min: 3, max: 60 },
      errorMessage: "Debe poseer entre 3 y 60 caracteres",
    },
  },
  edad: {
    exists: { errorMessage: "Se requiere la edad del superhéroe", bail: true },
    isInt: { options: { min: 0 }, errorMessage: "Debe ser un número mayor a 0" },
    toInt: true,
  },
  planetaOrigen: {
    optional: { options: { values: "falsy" } },
    isString: { errorMessage: "Debe ser una cadena de caracteres" },
    trim: true,
    escape: true,
    notEmpty: { errorMessage: "No puede esta vacio" },
  },
  debilidad: {
    optional: { options: { values: "falsy" } },
    isString: { errorMessage: "Debe ser una cadena de caracteres" },
    trim: true,
    escape: true,
    notEmpty: { errorMessage: "No puede estar vacia" },
  },
  poderes: {
    isArray: {
      options: { min: 1 },
      errorMessage: "Se requiere una lista con al menos un poder",
    },
  },
  "poderes.*": {
    isString: { errorMessage: "Debe ser una cadena de texto" },
    trim: true,
    escape: true,
    isLength: {
      options: { min: 3, max: 60 },
      errorMessage: "Debe poseer entre 3 y 60 caracteres",
    },
  },
  aliados: {
    optional: { options: { values: "falsy" } },
    isArray: { errorMessage: "Se requiere una lista con nombres de aliados", bail: true },
  },
  "aliados.*": {
    isString: { errorMessage: "Debe ser una cadena de caracteres" },
    trim: true,
    escape: true,
    isLength: {
      options: { min: 3, max: 60 },
      errorMessage: "Debe poseer entre 3 y 60 caracteres",
    },
  },
  enemigos: {
    optional: { options: { values: "falsy" } },
    isArray: {
      errorMessage: "Se requiere una lista con nombres de sus enemigos",
      bail: true,
    },
  },
  "enemigos.*": {
    isString: { errorMessage: "Debe ser una cadena de caracteres" },
    trim: true,
    escape: true,
    isLength: {
      options: { min: 3, max: 60 },
      errorMessage: "Debe poseer entre 3 y 60 caracteres",
    },
  },
  creador: {
    exists: {
      errorMessage: "Se requiere el nombre del usuario que registró el superhéroe",
      bail: true,
    },
    isString: { errorMessage: "Debe ser una cadena de caracteres" },
    trim: true,
    escape: true,
    notEmpty: { errorMessage: "No puede estar vacio" },
  },
});

export const updateSuperHeroValidationRules = checkSchema({
  nombreSuperHeroe: {
    optional: { options: { values: "falsy" } },
    trim: true,
    escape: true,
    isLength: {
      options: { min: 3, max: 60 },
      errorMessage: "Debe poseer entre 3 y 60 caracteres",
    },
  },
  nombreReal: {
    optional: { options: { values: "falsy" } },
    trim: true,
    escape: true,
    isLength: {
      options: { min: 3, max: 60 },
      errorMessage: "Debe poseer entre 3 y 60 caracteres",
    },
  },
  edad: {
    optional: { options: { values: "falsy" } },
    isInt: { options: { min: 0 }, errorMessage: "Debe ser un número mayor a 0" },
    toInt: true,
  },
  planetaOrigen: {
    optional: { options: { values: "falsy" } },
    isString: { errorMessage: "Debe ser una cadena de caracteres" },
    trim: true,
    escape: true,
    notEmpty: { errorMessage: "No puede esta vacio" },
  },
  debilidad: {
    optional: { options: { values: "falsy" } },
    isString: { errorMessage: "Debe ser una cadena de caracteres" },
    trim: true,
    escape: true,
    notEmpty: { errorMessage: "No puede estar vacia" },
  },
  poderes: {
    optional: { options: { values: "falsy" } },
    isArray: {
      errorMessage: "Debe ser una lista con al menos un poder",
    },
  },
  "poderes.*": {
    isString: { errorMessage: "Debe ser una cadena de texto" },
    trim: true,
    escape: true,
    isLength: {
      options: { min: 3, max: 60 },
      errorMessage: "Debe poseer entre 3 y 60 caracteres",
    },
  },
  aliados: {
    optional: { options: { values: "falsy" } },
    isArray: { errorMessage: "Debe ser una lista" },
  },
  "aliados.*": {
    isString: { errorMessage: "Debe ser una cadena de texto" },
    trim: true,
    escape: true,
    isLength: {
      options: { min: 3, max: 60 },
      errorMessage: "Debe poseer entre 3 y 60 caracteres",
    },
  },
  enemigos: {
    optional: { options: { values: "falsy" } },
    isArray: { errorMessage: "Debe ser una lista" },
  },
  "enemigos.*": {
    isString: { errorMessage: "Debe ser una cadena de texto" },
    trim: true,
    escape: true,
    isLength: {
      options: { min: 3, max: 60 },
      errorMessage: "Debe poseer entre 3 y 60 caracteres",
    },
  },
  creador: {
    optional: { options: { values: "falsy" } },
    isString: { errorMessage: "Debe ser una cadena de texto" },
    trim: true,
    escape: true,
    notEmpty: { errorMessage: "No puede estar vacio" },
  },
});
