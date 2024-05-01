import { Router } from "express";
import { uploadMyImage } from "../controllers/upload.controller.js"
import { getOpinions } from "../controllers/upload.controller.js"

const router = Router();

router.post("/uploadImage", uploadMyImage);
router.get("/getOpinions", getOpinions);


export default router