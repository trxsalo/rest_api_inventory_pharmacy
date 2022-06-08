"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const post_controllers_1 = require("../controllers/post.controllers");
router.route("/postLaboratorios")
    .post(post_controllers_1.postLaboratorios);
router.route("/postCargos")
    .post(post_controllers_1.postCargos);
router.route("/postPresentacion")
    .post(post_controllers_1.postPresentacions);
exports.default = router;
