import { Router, Request, Response } from 'express';
import { body, checkSchema, validationResult } from 'express-validator';
import { bodySchema } from '../express_validator/validaciones';
import { validacionPost } from '../express_validator/validaciones_post';
import postTres from '../controlador/postTres';

const router = Router();

router.post("/",
  body("name")
    .isString() // el elemento debe ser un string
    .withMessage("Name no soporta este tipo de dato")
    .trim()
    .isLength({min: 1, max: 9}) // da un largo no menor a 1 caracter
    .withMessage("Name es requerido y no debe superar los 9 caracteres")
    .escape(), // escapa código html así evita ataque xss
  body("email")
    .isEmail()
    .withMessage("email no válido")
    .normalizeEmail(),
  (req, res) => {

    const result = validationResult(req);
    if (result.isEmpty()) {
      const { name } = req.body;
      res.json({ message: `Hola: ${name}!` })
      return;
    }
    res.status(400).json({error: result.array()})
  })

  router.post("/dos", checkSchema(bodySchema), (req: Request, res: Response) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      const { name2 } = req.body;
      res.json({ message: `Hola: ${name2}!` })
      return;
    }

    res.status(400).json({error: result.array()})

  })

  router.post("/tres", validacionPost(), postTres)

export default router;