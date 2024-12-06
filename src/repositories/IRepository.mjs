class IRepository {
  obtenerPorId(id) {
    throw new Error("Método 'obtenerPorId()' no implementado");
  }

  buscarPorAtributo(atributo, valor) {
    throw new Error("Método 'buscarPorAtributo()' no implementado");
  }

  obtenerTodos() {
    throw new Error("Método 'obtenerTodos()' no implementado");
  }

  crear(superHeroData) {
    throw new Error("Método 'crear()' no implementado");
  }

  actualizar(id, superHeroData) {
    throw new Error("Método 'actualizar()' no implementado");
  }

  eliminar(id) {
    throw new Error("Método 'eliminar()' no implementado");
  }

  obtenerMayoresDe30() {
    throw new Error("Método 'obtenerMayoresDe30()' no implementado");
  }
}

export default IRepository;
