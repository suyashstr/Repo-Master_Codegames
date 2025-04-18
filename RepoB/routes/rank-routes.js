import e from "express";
import { rank } from "../controllers/rank-controller.js";

const routes = e.Router();

routes.post("/rank",rank);


export default routes;