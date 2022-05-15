import { Router } from "express";
import userCreateController from "../../controllers/user/userCreate.controller";
import userListController from "../../controllers/user/userList.controller";
import userListOneController from "../../controllers/user/userListOne.controller";

const routes = Router();

routes.post("/users", userCreateController);
routes.get("/users", userListController);
routes.get("/users/:id", userListOneController);
routes.patch("/users/:id");
routes.delete("/users/:id");

export default routes;
