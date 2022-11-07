const conectores = require('../controllers/conexion');
const cassandra = conectores.cassandra();
const redis = conectores.redis();

const postAdministrativo = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `ADMINISTRATIVOS:POST:${new Date().getTime().toString()}`,
      `Registro de administrativo ${req.body.curp}`
    );
    redis.quit();
  });

  const queries = [
    {
      query:
        'INSERT INTO administrativos(curp, correo, cuenta, escuela, extension, funcion, nombre, telefono) VALUES(?,?,?,?,?,?,?,?)',
      params: [
        req.body.curp,
        req.body.correo,
        req.body.cuenta,
        req.body.escuela,
        req.body.extension,
        req.body.funcion,
        req.body.nombre,
        req.body.telefono,
      ],
    },
    {
      query:
        'INSERT INTO administrativos_escuela(curp, correo, cuenta, escuela, extension, funcion, nombre, telefono) VALUES(?,?,?,?,?,?,?,?)',
      params: [
        req.body.curp,
        req.body.correo,
        req.body.cuenta,
        req.body.escuela,
        req.body.extension,
        req.body.funcion,
        req.body.nombre,
        req.body.telefono,
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
      `ALUMNOS:POST:${new Date().getTime().toString()}`,
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
      `DOCENTES:POST:${new Date().getTime().toString()}`,
      `Registro de docente ${req.body.curp}`
    );
    redis.quit();
  });

  const queries = [
    {
      query:
        'INSERT INTO docentes(curp, cuenta, escuela, especialidad, grado, nombre, numero_oficina, telefono, tutorados, tutorias_firmadas) VALUES(?,?,?,?,?,?,?,?,?,?)',
      params: [
        req.body.curp,
        req.body.cuenta,
        req.body.escuela,
        req.body.especialidad,
        req.body.grado,
        req.body.nombre,
        req.body.numero_oficina,
        req.body.telefono,
        req.body.tutorados,
        req.body.tutorias_firmadas,
      ],
    },
    {
      query:
        'INSERT INTO docentes_escuela(curp, cuenta, escuela, especialidad, grado, nombre, numero_oficina, telefono, tutorados, tutorias_firmadas) VALUES(?,?,?,?,?,?,?,?,?,?)',
      params: [
        req.body.curp,
        req.body.cuenta,
        req.body.escuela,
        req.body.especialidad,
        req.body.grado,
        req.body.nombre,
        req.body.numero_oficina,
        req.body.telefono,
        req.body.tutorados,
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
      `ESCUELAS:POST:${new Date().getTime().toString()}`,
      `Registro de escuela ${req.body.clave}`
    );
    redis.quit();
  });

  cassandra.execute(
    'INSERT INTO escuelas(clave, ciudad, direccion, nombre, administrativos, alumnos, docentes, mantenimiento) VALUES(?,?,?,?,?,?,?,?)',
    [
      req.body.clave,
      req.body.ciudad,
      req.body.direccion,
      req.body.nombre,
      req.body.administrativos,
      req.body.alumnos,
      req.body.docentes,
      req.body.mantenimiento,
    ],
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
      `MANTENIMIENTO:POST:${new Date().getTime().toString()}`,
      `Registro de mantenimiento ${req.body.curp}`
    );
    redis.quit();
  });

  cassandra.execute(
    'INSERT INTO mantenimiento(curp, escuela, especialidad, nombre, telefono, telefono_institucional) VALUES(?,?,?,?,?,?)',
    [
      req.body.curp,
      req.body.escuela,
      req.body.especialidad,
      req.body.nombre,
      req.body.telefono,
      req.body.telefono_institucional,
    ],
    { prepare: true },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result);
    }
  );
};

module.exports = {
  postAdministrativo,
  postAlumno,
  postDocente,
  postEscuela,
  postMantenimiento,
};
