import { Router } from "express";

const router = Router();

router.route("/")
    .get((req,res)=> res.json("post"));


export default router;