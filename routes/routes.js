const express = require('express');
const get = require('./controllers/get');
const post = require('./controllers/post');
const router = express.Router();

// GET
router.get('/alumnos', get.getAlumnos);
router.get('/alumnos/:curp', get.getAlumno);
router.get('/escuelas', get.getEscuelas);
router.get('/escuelas/:clave', get.getEscuela);
router.get('/escuelas/:clave/docentes', get.getDocentesEscuela);
router.get('/escuelas/:clave/administrativos', get.getAdministrativosEscuela);
router.get('/escuelas/:clave/mantenimientos', get.getMantenimientosEscuela);
router.get('/docentes', get.getDocentes);
router.get('/docentes/:curp', get.getDocente);
router.get('/docentes/:curp/tutorados', get.getTutorados);
router.get('/administrativos', get.getAdmistrativos);
router.get('/administrativos/:curp', get.getAdmistrativo);
router.get('/mantenimientos', get.getMantenimientos);
router.get('/mantenimientos/:curp', get.getMantenimiento);

// POST
router.post('/alumno', post.postAlumno);
router.post('/escuela', post.postEscuela);
router.post('/docente', post.postDocente);
router.post('/administrativo', post.postAdministrativo);
router.post('/mantenimiento', post.postMantenimiento);

module.exports = router;
