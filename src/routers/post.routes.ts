import { Router } from "express";


const router = Router();

import {postCargos,postLaboratorios, postPresentacions} from "../controllers/post.controllers"

router.route("/postLaboratorios")
    .post(postLaboratorios);

router.route("/postCargos")
    .post(postCargos)

router.route("/postPresentacion")
    .post(postPresentacions)



export default router;