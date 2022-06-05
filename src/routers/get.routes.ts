import { Router } from "express";

const router = Router();

import {
    getGrupo,
    getPresentacion,
    getEgreso,
    getEmpleado,
    getIngreso,
    getLote,
    getMedicamento,
    getRepresentante,
    getLaboratorio} from "../controllers/get.controllers"


router.route("/getGrupo")
    .get(getGrupo);

router.route("/getPresentacion")
    .get(getPresentacion);

router.route("/getMedicameto")
    .get(getMedicamento);

router.route("/getLote")
    .get(getLote);

router.route("/getLaboratorio")
    .get(getLaboratorio);

router.route("/getEmpleado")
    .get(getEmpleado);
    
router.route("/getIngreso")
    .get(getIngreso);

router.route("/getEgreso")
    .get(getEgreso);

router.route("/getRepresentante")
    .get(getRepresentante);


export default router;