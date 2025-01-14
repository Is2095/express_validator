import { check, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

const obtenerDiasDeSemana = async () => {
  return ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"]
}

export const validacionPost = () => {
  return [
    check("telefono")
      .isMobilePhone(["es-AR", "es-CL", "es-BO", "es-VE"], { strictMode: true }) // valida estrictamente que los número de telefonos sean de Argentina, Chile, Bolivia ó Venezuela
      .withMessage("El número de teléfono no es válido"),
    check("data")
      .isJSON() // valida que el parámetro "data", sea un String que contenga un JSON válido
      .withMessage("Formato no válido"),
    check("contrasena")
      .isLength({ min: 4, max: 25 }).withMessage("La contraseña debe tener entre 8 y 25 caracteres") // comprueba el tamaño de la contraseña
      // .matches(/^[A-Za-z0-9!@#$%^&*]{6,20}$/).withMessage('La contraseña debe tener entre 6 y 20 caracteres y solo incluir letras, números y caracteres especiales') // Ó
      .matches(/[A-Z]/).withMessage("La contraseña debe incluir letras mayúsculas")  // minúsculas
      .matches(/[a-z]/).withMessage("La contraseña debe incluir letras minúsculas")  // mayúsculas
      .matches(/\d/).withMessage('La contraseña debe incluir números'),  // números
    check("letras")
      .isLowercase().withMessage("deben ser las letras todas en minúsculas")
      .isAlpha().withMessage("el campo solo admites letras"), // comprueba que sólo contenga letras
    check("edad")
      .isNumeric().withMessage("la edad debe ser un número") // comprueba que sea un número ej: 2 ó  "2" lo toma como válido
      .isInt({ min: 5, max: 88 }).withMessage("la edad debe estar comprendida entre 5 y 88 años"),
    check("precio")
      .isFloat({ min: 0, max: 300 }).withMessage("el precio debe estar comprendido entre 0 y 300"),
    check("rol")
      .isIn(["admin", "user", "viewer", "editor"]).withMessage("el valor rol no es un valor admitido"), // comprueba que este en la lista indicada

    check("diaDeSemana")  // comprueba si se encuentra en una lista obtenida por un método (enum, base de datos, etc)
      .custom(async (value) => {
        const diasDeSemanaValidos = await obtenerDiasDeSemana()
        if (!diasDeSemanaValidos.includes(value)) {
          throw new Error("día de semana no válido")
        }
        return true
      }),
    check("nombre")
      .trim()
      .notEmpty() // el campo no debe ser vacío
      .withMessage("En nombre no puede ser vacío") // mensaje del error 
      .escape() // escapa código html así evita ataque xss
      .customSanitizer(value => value.toUpperCase()),  // con esta función actualizo el req.body poniendo a nombre en mayúsculas
    check("correo")
      .notEmpty()
      .withMessage("Debe ingresar un correo")
      .isEmail()
      .withMessage("Correo no válido"),


    (req: Request, res: Response, next: NextFunction) => {
      const errores = validationResult(req);

      if (!errores.isEmpty()) {
        const checkError = errores.array().map(err => err.msg);
        res.status(400).json({ errores: checkError })
        return;
      }
      next();
    }
  ]
}