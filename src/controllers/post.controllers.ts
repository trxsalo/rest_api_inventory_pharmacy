
import { connect } from "../database";  //Me traigo la conecxion

import {Request,Response} from "express"

import {
postCargo,
postGrupoTerapeutico,
postLaboratorio,
postLote,
postMedicamento,
postPresentacion,
postEmpleado,
postRepresentante,
}
from "../interface/post"


export async function postLaboratorios(req:Request, res:Response){
    const newLaboratorio:postLaboratorio= req.body;
    const conn = await connect();
    await conn.query("Insert into laboratorio set ?", [newLaboratorio]);
    res.json({
        mensage:"Se creo el nuevo laboratorio"
    });
}

export async function postCargos(req:Request,res:Response){
    const newCargo:postCargo = req.body;
    const conn = await connect();
    await conn.query("Insert into cargo set ?", [newCargo]);
    res.json({
        mensage:"Se creo el nuevo cargo"
    });
}

export async function postPresentacions(req:Request,res:Response) {
    const {nombre}:postPresentacion = req.body();
    const newPresentacion ={
        nombre
    }
    const conn = await connect();
    await conn.query("Insert into presentacion set ?", [newPresentacion]);
    res.json({
        mensage:"Se creo la nueva presentacion"
    })
}
