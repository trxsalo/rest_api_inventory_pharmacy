import { Router } from "express";

const router = Router();

router.route("/post")
    .get((req,res)=> res.json("post"));


export default router;