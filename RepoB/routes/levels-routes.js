import e from "express";
import { levels, nextPage } from "../controllers/levels-controller.js";

const routes = e.Router();

routes.post("/nextPage",nextPage);
routes.post("/levels",levels);

export default routes;