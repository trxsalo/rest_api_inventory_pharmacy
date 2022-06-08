import { Router } from "express";

const router = Router();

import {
    getGrupos,
    getPresentaciones,
    getEgresos,
    getEmpleados,
    getIngresos,
    getLotes,
    getMedicamentos,
    getRepresentantes,
    getLaboratorios,
    //por id //
    getGrupo,
    getEgreso,
    getEmpleado,
    getIngreso,
    getRepresentante,
    getLaboratorio,
    getLote,
    getMedicamento,
    getPresentacion
    } from "../controllers/get.controllers"


router.route("/getGrupos")
    .get(getGrupos);
router.route("/getGrupo/:getId")
    .get(getGrupo);

router.route("/getPresentaciones")
    .get(getPresentaciones);
router.route("/getPresentacion/:getId")
    .get(getPresentacion);


router.route("/getMedicametos")
    .get(getMedicamentos);
router.route("/getMedicameto/:getId")
    .get(getMedicamento);

router.route("/getLotes")
    .get(getLotes);
router.route("/getLote/:getId")
    .get(getLote);

router.route("/getLaboratorios")
    .get(getLaboratorios);
router.route("/getLaboratorio/:getId")
    .get(getLaboratorio);

router.route("/getEmpleados")
    .get(getEmpleados);
router.route("/getEmpleado/:getId")
    .get(getEmpleado);
    
router.route("/getIngresos")
    .get(getIngresos);
router.route("/getIngreso/:getId")
    .get(getIngreso);

router.route("/getEgresos")
    .get(getEgresos);
router.route("/getEgreso/:getId")
    .get(getEgreso);

router.route("/getRepresentantes")
    .get(getRepresentantes);
router.route("/getRepresentante/:getId")
    .get(getRepresentante);


export default router;