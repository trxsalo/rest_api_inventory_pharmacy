import { Router } from "express";

const router = Router();

import {postCargos,postLaboratorios} from "../controllers/post.controllers"

router.route("/postLaboratorios")
    .get(postLaboratorios);

router.route("postCargos")
    .get(postCargos)



export default router;