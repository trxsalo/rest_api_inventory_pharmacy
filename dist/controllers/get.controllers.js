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
exports.getIngreso = exports.getIngresos = exports.getEgreso = exports.getEgresos = exports.getRepresentante = exports.getRepresentantes = exports.getEmpleado = exports.getEmpleados = exports.getLaboratorio = exports.getLaboratorios = exports.getLote = exports.getLotes = exports.getMedicamento = exports.getMedicamentos = exports.getPresentacion = exports.getPresentaciones = exports.getGrupo = exports.getGrupos = void 0;
const database_1 = require("../database"); //Me traigo la conecxion
/////////------------ DAR LOS DATOS----------//////////
function getGrupos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const grupoTerapeutico = yield conn.query("Select * from grupo_terapeutico");
        res.json(grupoTerapeutico[0]);
    });
}
exports.getGrupos = getGrupos;
function getGrupo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.getId;
        const conn = yield (0, database_1.connect)();
        const get = yield conn.query("Select * from grupo_terapeutico where idGrupo = ?", [id]);
        return res.json(get[0]);
    });
}
exports.getGrupo = getGrupo;
//---------------------//
function getPresentaciones(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const prsentacion = yield conn.query("Select * from presentacion");
        res.json(prsentacion[0]);
    });
}
exports.getPresentaciones = getPresentaciones;
function getPresentacion(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.getId;
        const conn = yield (0, database_1.connect)();
        const prsentacion = yield conn.query("Select * from presentacion where idPresentacion = ?", [id]);
        return res.json(prsentacion[0]);
    });
}
exports.getPresentacion = getPresentacion;
///---------------------//
function getMedicamentos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const medicamento = yield conn.query("Select * from medicamento");
        res.json(medicamento[0]);
    });
}
exports.getMedicamentos = getMedicamentos;
function getMedicamento(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.getId;
        const conn = yield (0, database_1.connect)();
        const medicamento = yield conn.query("Select * from medicamento where idMedicamento = ?", [id]);
        return res.json(medicamento[0]);
    });
}
exports.getMedicamento = getMedicamento;
//------------//
function getLotes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const lote = yield conn.query("Select * from lote");
        res.json(lote[0]);
    });
}
exports.getLotes = getLotes;
function getLote(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.getId;
        const conn = yield (0, database_1.connect)();
        const lote = yield conn.query("Select * from lote where idLote = ?", [id]);
        return res.json(lote[0]);
    });
}
exports.getLote = getLote;
//-----//
function getLaboratorios(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const loboratorio = yield conn.query("SELECT * FROM laboratorio");
        res.json(loboratorio[0]);
    });
}
exports.getLaboratorios = getLaboratorios;
function getLaboratorio(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.getId;
        const conn = yield (0, database_1.connect)();
        const loboratorio = yield conn.query("SELECT * FROM laboratorio where idLote = ?", [id]);
        return res.json(loboratorio[0]);
    });
}
exports.getLaboratorio = getLaboratorio;
//---//
//---//
function getEmpleados(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const personal = yield conn.query("Select * from empleado");
        res.json(personal[0]);
    });
}
exports.getEmpleados = getEmpleados;
function getEmpleado(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.getId;
        const conn = yield (0, database_1.connect)();
        const personal = yield conn.query("Select * from empleado where ciEmpleado = ?", [id]);
        return res.json(personal[0]);
    });
}
exports.getEmpleado = getEmpleado;
//---------------//
function getRepresentantes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const representante = yield conn.query("Select * from representante");
        res.json(representante[0]);
    });
}
exports.getRepresentantes = getRepresentantes;
function getRepresentante(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.getId;
        const conn = yield (0, database_1.connect)();
        const representante = yield conn.query("Select * from representante where ciRepresentante = ?", [id]);
        return res.json(representante[0]);
    });
}
exports.getRepresentante = getRepresentante;
//----//
function getEgresos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const egreso = yield conn.query("Select * from egreso");
        res.json(egreso[0]);
    });
}
exports.getEgresos = getEgresos;
function getEgreso(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.getId;
        const conn = yield (0, database_1.connect)();
        const egreso = yield conn.query("Select * from egreso where idEgreso = ?", [id]);
        return res.json(egreso[0]);
    });
}
exports.getEgreso = getEgreso;
//----//
function getIngresos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const ingreso = yield conn.query("Select * from ingreso");
        res.json(ingreso[0]);
    });
}
exports.getIngresos = getIngresos;
function getIngreso(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.getId;
        const conn = yield (0, database_1.connect)();
        const ingreso = yield conn.query("Select * from ingreso where idIngreso = ?", [id]);
        return res.json(ingreso[0]);
    });
}
exports.getIngreso = getIngreso;
