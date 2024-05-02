
const mongoose = require("mongoose");


const fichasEsq = mongoose.Schema({
    numFicha: {
        type: String,
        required: true
    },
    aprendicesActuales: {
        type: Number,
        required: true
    },
    aprendicesMatriculados: {
        type: Number,
        required: true
    },
    jornada: {
        type: String,
        required: true
    },
    tFormacion: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("fichas", fichasEsq); // Se entregan como parámetros el nombre de la colección a la que va dirigida y el esquema creado
