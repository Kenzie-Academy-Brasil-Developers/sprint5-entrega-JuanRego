import { Request, Response } from "express";
import userPatchService from "../../services/user/userPatch.service";

const userListOneController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, password, age } = req.body;
    const user = await userPatchService({ id }, { name, email, password, age });

    return res.status(200).send(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userListOneController;
