"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postPresentacions = exports.postCargos = exports.postLaboratorios = void 0;
const database_1 = require("../database"); //Me traigo la conecxion
function postLaboratorios(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newLaboratorio = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query("Insert into laboratorio set ?", [newLaboratorio]);
        res.json({
            mensage: "Se creo el nuevo laboratorio"
        });
    });
}
exports.postLaboratorios = postLaboratorios;
function postCargos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newCargo = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query("Insert into cargo set ?", [newCargo]);
        res.json({
            mensage: "Se creo el nuevo cargo"
        });
    });
}
exports.postCargos = postCargos;
function postPresentacions(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newPresentacion = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query("Insert into presentacion set ?", [newPresentacion]);
        res.json({
            mensage: "Se creo la nueva presentacion"
        });
    });
}
exports.postPresentacions = postPresentacions;
