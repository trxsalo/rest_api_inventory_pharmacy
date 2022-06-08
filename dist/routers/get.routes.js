"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const get_controllers_1 = require("../controllers/get.controllers");
router.route("/getGrupos")
    .get(get_controllers_1.getGrupos);
router.route("/getGrupo/:getId")
    .get(get_controllers_1.getGrupo);
router.route("/getPresentaciones")
    .get(get_controllers_1.getPresentaciones);
router.route("/getPresentacion/:getId")
    .get(get_controllers_1.getPresentacion);
router.route("/getMedicametos")
    .get(get_controllers_1.getMedicamentos);
router.route("/getMedicameto/:getId")
    .get(get_controllers_1.getMedicamento);
router.route("/getLotes")
    .get(get_controllers_1.getLotes);
router.route("/getLote/:getId")
    .get(get_controllers_1.getLote);
router.route("/getLaboratorios")
    .get(get_controllers_1.getLaboratorios);
router.route("/getLaboratorio/:getId")
    .get(get_controllers_1.getLaboratorio);
router.route("/getEmpleados")
    .get(get_controllers_1.getEmpleados);
router.route("/getEmpleado/:getId")
    .get(get_controllers_1.getEmpleado);
router.route("/getIngresos")
    .get(get_controllers_1.getIngresos);
router.route("/getIngreso/:getId")
    .get(get_controllers_1.getIngreso);
router.route("/getEgresos")
    .get(get_controllers_1.getEgresos);
router.route("/getEgreso/:getId")
    .get(get_controllers_1.getEgreso);
router.route("/getRepresentantes")
    .get(get_controllers_1.getRepresentantes);
router.route("/getRepresentante/:getId")
    .get(get_controllers_1.getRepresentante);
exports.default = router;
