import express from "express";
import { addP, points } from "../controllers/points-controllers.js";

const routes = express.Router();

routes.post("/points",points);
routes.post("/addP",addP);

export default routes;