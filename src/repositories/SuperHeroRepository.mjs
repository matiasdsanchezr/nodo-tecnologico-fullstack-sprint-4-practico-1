import { mongoose } from "mongoose";
import IRepository from "./IRepository.mjs";
import SuperHero from "../models/SuperHero.mjs";

class SuperHeroeRepository extends IRepository {
  /**
   * Obtener un superhéroes mediante su id en la base de datos.
   * @param {string} id - El id del superhéroe a buscar.
   * @returns {Promise<SuperHero|null>}
   * @throws {Error}
   */
  async obtenerPorId(id) {
    return await SuperHero.findById(id);
  }

  /**
   * Obtener todos los superhéroes en la base de datos.
   * @returns {Promise<SuperHero>}
   * @throws {Error}
   */
  async obtenerTodos() {
    return await SuperHero.find({});
  }

  /**
   * Obtener una lista de superhéroes cuyo atributo contenga el valor especificado.
   * @param {string} atributo - El atributo a evaluar.
   * @param {string} valor - El valor que el atributo debe poseer.
   * @returns {Promise<Array<SuperHero>>}
   * @throws {Error}
   */
  async buscarPorAtributo(atributo, valor) {
    let query = {};
    const atributoType = SuperHero.schema.path(atributo);
    if (atributoType instanceof mongoose.Schema.Types.Number) {
      query = { [atributo]: { $eq: valor } };
    } else {
      query = { [atributo]: { $regex: valor, $options: "i" } };
    }
    return await SuperHero.find(query);
  }

  /**
   * Obtener una lista de superhéroes con edad mayor a 30, planeta
   * de origen igual a "Tierra" y cantidad de poderes mayor a 2.
   * @returns {Promise<Array<SuperHero>>}
   * @throws {Error}
   */
  async obtenerMayoresDe30() {
    return await SuperHero.find({
      edad: { $gt: 30 },
      planetaOrigen: "Tierra",
      "poderes.2": { $exists: true },
    });
  }

  /**
   * @typedef {Object} SuperHeroData
   * @property {string} nombreSuperHeroe - El nombre del superhéroe.
   * @property {number} nombreReal - El nombre real del superhéroe.
   * @property {string} edad - La edad del superhéroe.
   * @property {string} planetaOrigen - El planeta del que proviene el superhéroe.
   * @property {string} debilidad - La debilidad del superhéroe.
   * @property {Array.<string>} poderes - Una lista con los poderes del superhéroe
   * @property {Array.<string>} aliados - Una lista con los nombres de los aliados del superhéroe.
   * @property {Array.<string>} enemigos - Una lista con los enemigos del superhéroe.
   * @property {string} creador - El nombre del usuario que registró al superhéroe en la base de datos.
   */

  /**
   * Añadir un nuevo superhéroe a la base de datos
   * @param {SuperHeroData} superHeroData Los datos del superhéroe para registrar en la base de datos
   * @returns {Promise<SuperHero>}
   * @throws {Error}
   */
  async crear(superHeroData) {
    return await SuperHero.create(superHeroData);
  }

  /**
   * Actualizar los datos de un superhéroe en la base de datos
   * @param {SuperHeroData} superHeroData Los nuevos datos del superhéroe
   * @returns {Promise<SuperHero>}
   * @throws {Error}
   */
  async actualizar(id, superHeroData) {
    return await SuperHero.findByIdAndUpdate(id, superHeroData);
  }

  /**
   * Eliminar un superhéroe mediante su id.
   * @param {string} superheroId El id del superhéroe a eliminar
   * @throws {Error}
   */
  async eliminar(superheroId) {
    return await SuperHero.deleteOne({ _id: superheroId });
  }
}

export default new SuperHeroeRepository();
