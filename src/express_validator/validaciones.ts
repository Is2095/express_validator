import { Schema } from "express-validator";

const bodySchema: Schema = {
  name2: {
    isString: {
      errorMessage: "Error en el tipo de elemento de name2"
    },
    trim: true,
    isLength: {
      options: {min: 1, max: 9},
      errorMessage: "Name2 es requerido y no debe sobrepasar los 9 caracteres"
    },
    escape: true
  },
  email2: {
    isEmail: {
      errorMessage: "El email no es válido"
    },
    normalizeEmail: true
  }
}

export {
  bodySchema
}