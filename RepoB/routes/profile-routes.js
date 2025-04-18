import express from "express";
import { profile, setprofile } from "../controllers/profile-controller.js";

 const router = express.Router();

 router.post("/profile",profile);
 router.post("/setprofile",setprofile);

 export default router;