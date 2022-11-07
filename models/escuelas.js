const { Schema, model } = require('mongoose');

const schema = new Schema({
  _id: Schema.Types.ObjectId,
  administrativos: [Schema.Types.ObjectId],
  alumnos: [Schema.Types.ObjectId],
  ciudad: String,
  clave: String,
  direccion: String,
  docentes: [Schema.Types.ObjectId],
  mantenimiento: [Schema.Types.ObjectId],
  nombre: String,
});

const modelo = model('escuelas', schema);
module.exports = modelo;
