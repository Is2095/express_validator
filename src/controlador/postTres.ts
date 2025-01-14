
import { Response, Request } from "express";

const postTres = (req: Request, res: Response) => {
  const { nombre, telefono } = req.body;
  res.status(200).json({message: `el nombre es: ${nombre}!`, telefono });
}
export default postTres; 