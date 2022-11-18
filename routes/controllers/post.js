const conectores = require('../controllers/conexion');
const cassandra = conectores.cassandra();
const redis = conectores.redis();

const postAdministrativo = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `ADMINISTRATIVOS:POST:${new Date().toISOString()}`,
      `Registro de administrativo ${req.body.curp}`
    );
    redis.quit();
  });

  const queries = [
    {
      query:
        'INSERT INTO administrativos(curp, correo, cuenta, escuela, extension, funcion, nombre, telefono, hora_entrada, hora_salida) VALUES(?,?,?,?,?,?,?,?,?,?)',
      params: [
        req.body.curp,
        req.body.correo,
        req.body.cuenta,
        req.body.escuela,
        req.body.extension,
        req.body.funcion,
        req.body.nombre,
        req.body.telefono,
        req.body.hora_entrada,
        req.body.hora_salida,
      ],
    },
    {
      query:
        'INSERT INTO administrativos_escuela(curp, correo, cuenta, escuela, extension, funcion, nombre, telefono, hora_entrada, hora_salida) VALUES(?,?,?,?,?,?,?,?,?,?)',
      params: [
        req.body.curp,
        req.body.correo,
        req.body.cuenta,
        req.body.escuela,
        req.body.extension,
        req.body.funcion,
        req.body.nombre,
        req.body.telefono,
        req.body.hora_entrada,
        req.body.hora_salida,
      ],
    },
  ];

  cassandra.batch(queries, { prepare: true }, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
};

const postAlumno = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `ALUMNOS:POST:${new Date().toISOString()}`,
      `Registro de alumno ${req.body.curp}`
    );
    redis.quit();
  });

  const queries = [
    {
      query:
        'INSERT INTO alumnos(curp, escuela, fecha_inscripcion, fecha_nacimiento, grado, nombre, tutor, tutoria_firmada) VALUES(?,?,?,?,?,?,?,?)',
      params: [
        req.body.curp,
        req.body.escuela,
        req.body.fecha_inscripcion,
        req.body.fecha_nacimiento,
        req.body.grado,
        req.body.nombre,
        req.body.tutor,
        false,
      ],
    },
    {
      query:
        'INSERT INTO alumnos_tutor(curp, escuela, fecha_inscripcion, fecha_nacimiento, grado, nombre, tutor, tutoria_firmada) VALUES(?,?,?,?,?,?,?,?)',
      params: [
        req.body.curp,
        req.body.escuela,
        req.body.fecha_inscripcion,
        req.body.fecha_nacimiento,
        req.body.grado,
        req.body.nombre,
        req.body.tutor,
        false,
      ],
    },
  ];

  cassandra.batch(queries, { prepare: true }, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
};

const postDocente = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `DOCENTES:POST:${new Date().toISOString()}`,
      `Registro de docente ${req.body.curp}`
    );
    redis.quit();
  });

  const queries = [
    {
      query:
        'INSERT INTO docentes(curp, cuenta, escuela, especialidad, grado, nombre, numero_oficina, telefono, tutorias_firmadas) VALUES(?,?,?,?,?,?,?,?,?)',
      params: [
        req.body.curp,
        req.body.cuenta,
        req.body.escuela,
        req.body.especialidad,
        req.body.grado,
        req.body.nombre,
        req.body.numero_oficina,
        req.body.telefono,
        req.body.tutorias_firmadas,
      ],
    },
    {
      query:
        'INSERT INTO docentes_escuela(curp, cuenta, escuela, especialidad, grado, nombre, numero_oficina, telefono, tutorias_firmadas) VALUES(?,?,?,?,?,?,?,?,?)',
      params: [
        req.body.curp,
        req.body.cuenta,
        req.body.escuela,
        req.body.especialidad,
        req.body.grado,
        req.body.nombre,
        req.body.numero_oficina,
        req.body.telefono,
        req.body.tutorias_firmadas,
      ],
    },
  ];

  cassandra.batch(queries, { prepare: true }, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
};

const postEscuela = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `ESCUELAS:POST:${new Date().toISOString()}`,
      `Registro de escuela ${req.body.clave}`
    );
    redis.quit();
  });

  cassandra.execute(
    'INSERT INTO escuelas(clave, ciudad, direccion, nombre) VALUES(?,?,?,?)',
    [req.body.clave, req.body.ciudad, req.body.direccion, req.body.nombre],
    { prepare: true },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result);
    }
  );
};

const postMantenimiento = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `MANTENIMIENTO:POST:${new Date().toISOString()}`,
      `Registro de mantenimiento ${req.body.curp}`
    );
    redis.quit();
  });

  const queries = [
    {
      query:
        'INSERT INTO mantenimiento(curp, escuela, especialidad, nombre, telefono, telefono_institucional, cuenta) VALUES(?,?,?,?,?,?,?)',
      params: [
        req.body.curp,
        req.body.escuela,
        req.body.especialidad,
        req.body.nombre,
        req.body.telefono,
        req.body.telefono_institucional,
        req.body.cuenta,
      ],
    },
    {
      query:
        'INSERT INTO mantenimiento_escuela(curp, escuela, especialidad, nombre, telefono, telefono_institucional, cuenta) VALUES(?,?,?,?,?,?,?)',
      params: [
        req.body.curp,
        req.body.escuela,
        req.body.especialidad,
        req.body.nombre,
        req.body.telefono,
        req.body.telefono_institucional,
        req.body.cuenta,
      ],
    },
  ];

  cassandra.batch(queries, { prepare: true }, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
};

module.exports = {
  postAdministrativo,
  postAlumno,
  postDocente,
  postEscuela,
  postMantenimiento,
};
