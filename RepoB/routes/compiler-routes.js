import express from "express";
import { compiler } from "../controllers/compiler-controller.js";


const routes = express.Router();

routes.post("/compiler",compiler);

export default routes;