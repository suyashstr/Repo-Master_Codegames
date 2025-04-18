import e from "express";
import { cutL } from "../controllers/lives-controller.js";

const routes = e.Router();

routes.post("/cutL",cutL)

export default routes;