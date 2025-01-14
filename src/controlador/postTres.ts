
import { Response, Request } from "express";

const postTres = (req: Request, res: Response) => {
  const data = req.body;
  res.status(200).json({data});
}
export default postTres; 