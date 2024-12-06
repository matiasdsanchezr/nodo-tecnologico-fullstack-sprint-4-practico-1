import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";
import SuperHero from "../models/SuperHero.mjs";

/**
 * Obtener un superhéroes mediante su id en la base de datos.
 * @param {string} id El id del superhéroe a buscar.
 * @returns {Promise<SuperHero|null>}
 * @throws {Error}
 */
export async function obtenerSuperheroePorId(id) {
  try {
    return await SuperHeroRepository.obtenerPorId(id);
  } catch (error) {
    console.error(error);
    throw new Error("Se produjo un error al obtener un superhéroe mediante su id");
  }
}

/**
 * Obtener una lista con todos los superhéroes registrados en la base de datos.
 * @returns {Promise<Array<SuperHero>>}
 * @throws {Error}
 */
export async function obtenerTodosLosSuperheroes() {
  try {
    return await SuperHeroRepository.obtenerTodos();
  } catch (error) {
    console.error(error);
    throw new Error("Se produjo un error al obtener la lista de todos los superhéroes");
  }
}

/**
 * Obtener una lista de todos los superhéroes que posean un valor específico de atributo.
 * @param {string} atributo - El atributo a evaluar.
 * @param {string|null} valor - El valor que debe tener el atributo.
 * @returns {Promise<Array<SuperHero>>}
 * @throws {Error}
 */
export async function buscarSuperheroePorAtributo(atributo, valor) {
  try {
    return await SuperHeroRepository.buscarPorAtributo(atributo, valor);
  } catch (error) {
    console.error(error);
    throw new Error("No se pudo obtener la lista de superhéroes mediante un atributo");
  }
}

/**
 * Obtener una lista de superhéroes cuya edad sea mayor a 30, pertenezcan a la tierra
 * y posea mas de dos poderes.
 * @returns {Promise<Array<SuperHero>>}
 * @throws {Error}
 */
export async function obtenerSuperheroesMayoresDe30() {
  return await SuperHeroRepository.obtenerMayoresDe30();
}

/**
 * @typedef {Object} SuperHeroData
 * @property {string} nombreSuperHeroe - El nombre del superhéroe.
 * @property {number} nombreReal - El nombre real del superhéroe.
 * @property {string} edad - La edad del superhéroe.
 * @property {string} planetaOrigen - El planeta del que proviene el superhéroe.
 * @property {string} debilidad - La debilidad del superhéroe.
 * @property {Array.<string>} poderes - Una lista con los poderes del superhéroe.
 * @property {Array.<string>} aliados - Una lista con los nombres de los aliados del superhéroe.
 * @property {Array.<string>} enemigos - Una lista con los enemigos del superhéroe.
 * @property {string} creador - El nombre del usuario que registró al superhéroe en la base de datos.
 */

/** * Crea un nuevo superhéroe.
 * @param {SuperHeroData} superHeroData - Los datos del superhéroe a crear.
 * @returns {Promise<SuperHero>}
 * @throws {Error} Si el superhéroe no pudo ser agregado a la base de datos.
 */
export async function agregarSuperHeroe(superHeroData) {
  try {
    return await SuperHeroRepository.crear(superHeroData);
  } catch (error) {
    console.error(error);
    throw new Error("Error al registrar el superhéroe en la base de datos");
  }
}

/**
 * Actualizar los datos de un superhéroe.
 * @param {string} id El id del superhéroe que debe ser actualizado.
 * @param {SuperHeroData} superHeroData Los nuevos datos del superhéroe.
 * @throws {Error}
 */
export async function actualizarSuperheroe(id, superHeroData) {
  const superHeroExists = await SuperHeroRepository.obtenerPorId(id);
  if (!superHeroExists) {
    throw { status: 404, message: "Superhéroe no encontrado" };
  }

  try {
    return await SuperHeroRepository.actualizar(id, superHeroData);
  } catch (error) {
    console.error(error);
    throw new Error("Error al actualizar los datos del superhéroe");
  }
}

/**
 * Eliminar un superhéroe de la base de datos.
 * @param {string} id El id del superhéroe que debe eliminarse.
 * @throws {Error}
 */
export async function eliminarSuperheroe(id) {
  try {
    return await SuperHeroRepository.eliminar(id);
  } catch (error) {
    console.error(error);
    throw new Error("Error al eliminar el superhéroe");
  }
}

/**
 * Eliminar un superhéroe de la base de datos.
 * @param {string} nombreSuperHeroe El nombre del superhéroe que se debe eliminar.
 * @throws {Error}
 */
export async function eliminarSuperheroePorNombre(nombreSuperHeroe) {
  const superHero = await SuperHeroRepository.buscarPorAtributo(
    "nombreSuperHeroe",
    nombreSuperHeroe
  );
  if (superHero.length < 1) {
    throw { status: 404, message: "Superhéroe no encontrado" };
  }

  try {
    const id = superHero[0]._id;
    return await SuperHeroRepository.eliminar(id);
  } catch (error) {
    console.error(error);
    throw new Error("Error al eliminar el superhéroe mediante su nombre");
  }
}
