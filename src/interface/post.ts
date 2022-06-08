export interface postLaboratorio {
    //idLaboratorio?:number,
    nombre:string,
    telefonno:number,
    correo:string
}

export interface postLote {
    //idLotes?:number,
    cantidad:number,
    fechaVencimineto:Date,
    pkMedicamento:number,
    pkIgreso:number,
    pkLaboratorio:number
}

export interface postMedicamento{
    //idMedicamneto:number,
    nombreComercial:string,
    nombreCientifico:string,
    pkPresentacion:number,
    pkGrupo:number
}

export interface postPresentacion{
    //idPresentacion:number,
    nombre:string
}

export interface postGrupoTerapeutico{
    //idGrupo:number,
    nombre:string
}

export interface postCargo{
    //idCargo:number,
    nombre:string
}

//----/// 
/*  
Hay que soluccionar la parte de detalleEgreso, ingreso, egreso

*/

export interface postEmpleado{
    ciEmpleado:number,
    nombre:string,
    apellidoP:string,
    apellidoM:string,
    correo:string,
    telefono:number,
    profesion:string,
    pkCargo:string
}

export interface postRepresentante{
    ciRepresentante:number,
    nombre:string,
    apellidoP:string,
    apellidoM:string,
    correo:string,
    telefono:number,
    pkLaboratorio:number
}