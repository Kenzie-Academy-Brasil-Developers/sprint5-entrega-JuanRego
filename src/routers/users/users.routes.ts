import { Router } from "express";
import userCreateController from "../../controllers/user/userCreate.controller";
import userListController from "../../controllers/user/userList.controller";
import userListOneController from "../../controllers/user/userListOne.controller";
import userDeleteController from "../../Controllers/user/userDelete.Controller";
import userPatchController from "../../Controllers/user/userPatch.Controller";

const routes = Router();

routes.post("/users", userCreateController);
routes.get("/users", userListController);
routes.get("/users/:id", userListOneController);
routes.patch("/users/:id", userPatchController);
routes.delete("/users/:id", userDeleteController);

export default routes;
