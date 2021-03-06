
import { connect } from "../database";  //Me traigo la conecxion

import {Request,Response} from "express"

/////////------------ DAR LOS DATOS----------//////////


export async function getGrupos(req:Request, res:Response){
    const conn = await connect();
    const grupoTerapeutico = await conn.query("Select * from grupo_terapeutico");
    res.json(grupoTerapeutico[0]);
}

export async function getGrupo(req:Request,res:Response):Promise<Response> {
    const id = req.params.getId;
    const conn = await connect();
    const get = await conn.query("Select * from grupo_terapeutico where idGrupo = ?",[id] );

    return res.json(get[0]);
}

//---------------------//
export async function getPresentaciones(req:Request, res:Response){
    const conn = await connect();
    const prsentacion = await conn.query("Select * from presentacion");
    res.json(prsentacion[0]);
}

export async function getPresentacion(req:Request, res:Response):Promise<Response>{
    const id = req.params.getId
    const conn = await connect();
    const prsentacion = await conn.query("Select * from presentacion where idPresentacion = ?",[id]);
    return res.json(prsentacion[0]);
}

///---------------------//
export async function getMedicamentos(req:Request, res:Response){
    const conn = await connect();
    const medicamento = await conn.query("Select * from medicamento");
    res.json(medicamento[0]);
}

export async function getMedicamento(req:Request, res:Response):Promise<Response>{
    const id = req.params.getId;
    const conn = await connect();
    const medicamento = await conn.query("Select * from medicamento where idMedicamento = ?", [id]);
    return res.json(medicamento[0]);
}

//------------//
export async function getLotes(req:Request, res:Response){
    const conn = await connect();
    const lote = await conn.query("Select * from lote");
    res.json(lote[0]);
}

export async function getLote(req:Request, res:Response):Promise<Response>{
    const id = req.params.getId
    const conn = await connect();
    const lote = await conn.query("Select * from lote where idLote = ?", [id]);
    return res.json(lote[0]);
}
//-----//

export async function getLaboratorios(req:Request, res:Response){
    const conn = await connect();
    const loboratorio = await conn.query("SELECT * FROM laboratorio");
    res.json(loboratorio[0]);
}


export async function getLaboratorio(req:Request, res:Response):Promise<Response>{
    const id = req.params.getId;
    const conn = await connect();
    const loboratorio = await conn.query("SELECT * FROM laboratorio where idLote = ?", [id]);
    return res.json(loboratorio[0]);
}

//---//
//---//


export async function getEmpleados(req:Request, res:Response){
    const conn = await connect();
    const personal = await conn.query("Select * from empleado");
    res.json(personal[0]);
}
export async function getEmpleado(req:Request, res:Response):Promise<Response>{
    const id = req.params.getId;
    const conn = await connect();
    const personal = await conn.query("Select * from empleado where ciEmpleado = ?",[id]);
    return res.json(personal[0]);
}

//---------------//
export async function getRepresentantes(req:Request, res:Response){
    const conn = await connect();
    const representante = await conn.query("Select * from representante");
    res.json(representante[0]);
}
export async function getRepresentante(req:Request, res:Response):Promise<Response>{
    const id = req.params.getId
    const conn = await connect();
    const representante = await conn.query("Select * from representante where ciRepresentante = ?",[id]);
    return res.json(representante[0]);
}

//----//

export async function getEgresos(req:Request, res:Response){
    const conn = await connect();
    const egreso = await conn.query("Select * from egreso");
    res.json(egreso[0]);
}
export async function getEgreso(req:Request, res:Response):Promise<Response>{
    const id = req.params.getId
    const conn = await connect();
    const egreso = await conn.query("Select * from egreso where idEgreso = ?", [id]);
    return res.json(egreso[0]);
}

//----//
export async function getIngresos(req:Request, res:Response){
    const conn = await connect();
    const ingreso = await conn.query("Select * from ingreso");
    res.json(ingreso[0]);
}
export async function getIngreso(req:Request, res:Response):Promise<Response>{
    const id = req.params.getId
    const conn = await connect();
    const ingreso = await conn.query("Select * from ingreso where idIngreso = ?",[id]);
    return res.json(ingreso[0]);
}
