const conectores = require('../controllers/conexion');
const conexion = conectores.cassandra();
const redis = conectores.redis();

const getAlumnos = (req, res) => {
  redis.connect().then(() => {
    redis.set(`ALUMNOS:GET:${new Date().toISOString()}`, 'Consulta de alumnos');
    redis.quit();
  });

  conexion.execute('SELECT * FROM alumnos', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result.rows);
  });
};

const getAlumno = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `ALUMNOS:GET:${new Date().toISOString()}`,
      `Consulta de alumno ${req.params.curp}`
    );
    redis.quit();
  });

  conexion.execute(
    'SELECT * FROM alumnos WHERE curp=?',
    [req.params.curp],
    { prepare: true },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result.rows[0]);
    }
  );
};

const getEscuelas = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `ESCUELAS:GET:${new Date().toISOString()}`,
      'Consulta de escuelas'
    );
    redis.quit();
  });

  conexion.execute('SELECT * FROM escuelas', (err, results) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(results.rows);
  });
};

const getEscuela = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `ESCUELAS:GET:${new Date().toISOString()}`,
      `Consulta de escuela ${req.params.clave}`
    );
    redis.quit();
  });

  conexion.execute(
    'SELECT * FROM escuelas where clave=?',
    [req.params.clave],
    { prepare: true },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result.rows[0]);
    }
  );
};

const getDocentes = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `DOCENTES:GET:${new Date().toISOString()}`,
      'Consulta de docentes'
    );
    redis.quit();
  });

  conexion.execute('SELECT * FROM docentes', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result.rows);
  });
};

const getDocente = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `DOCENTES:GET:${new Date().toISOString()}`,
      `Consulta de docente ${req.params.curp}`
    );
    redis.quit();
  });

  conexion.execute(
    'SELECT * FROM docentes where curp=?',
    [req.params.curp],
    { prepare: true },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result.rows[0]);
    }
  );
};

const getAdmistrativos = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `ADMINISTRATIVOS:GET:${new Date().toISOString()}`,
      'Consulta de administrativos'
    );
    redis.quit();
  });

  conexion.execute('SELECT * FROM administrativos', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result.rows);
  });
};

const getAdmistrativo = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `ADMINISTRATIVOS:GET:${new Date().toISOString()}`,
      `Consulta de administrativo ${req.params.curp}`
    );
    redis.quit();
  });

  conexion.execute(
    'SELECT * FROM administrativos where curp=?',
    [req.params.curp],
    { prepare: true },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result.rows[0]);
    }
  );
};

const getMantenimientos = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `MANTENIMIENTOS:GET:${new Date().toISOString()}`,
      'Consulta de mantenimientos'
    );
    redis.quit();
  });

  conexion.execute('SELECT * FROM mantenimiento', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result.rows);
  });
};

const getMantenimiento = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `MANTENIMIENTOS:GET:${new Date().toISOString()}`,
      `Consulta de mantenimiento ${req.params.curp}`
    );
    redis.quit();
  });

  conexion.execute(
    'SELECT * FROM mantenimiento where curp=?',
    [req.params.curp],
    { prepare: true },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result.rows[0]);
    }
  );
};

const getTutorados = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `DOCENTES:GET:${new Date().toISOString()}`,
      `Consulta de tutorados de ${req.params.curp}`
    );
    redis.quit();
  });

  conexion.execute(
    'SELECT * FROM alumnos_tutor WHERE tutor=?',
    [req.params.curp],
    { prepare: true },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result.rows);
    }
  );
};

const getDocentesEscuela = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `ESCUELAS:GET:${new Date().toISOString()}`,
      `Consulta de docentes de ${req.params.clave}`
    );
    redis.quit();
  });

  conexion.execute(
    'SELECT * FROM docentes_escuela WHERE escuela=?',
    [req.params.clave],
    { prepare: true },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result.rows);
    }
  );
};

const getAdministrativosEscuela = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `ESCUELAS:GET:${new Date().toISOString()}`,
      `Consulta de administrativos de ${req.params.clave}`
    );
    redis.quit();
  });

  conexion.execute(
    'SELECT * FROM administrativos_escuela WHERE escuela=?',
    [req.params.clave],
    { prepare: true },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result.rows);
    }
  );
};

const getMantenimientosEscuela = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `MANTENIMIENTOS:GET:${new Date().toISOString()}`,
      `Consulta de mantenimientos de ${req.params.clave}`
    );
    redis.quit();
  });

  conexion.execute(
    'SELECT * FROM mantenimiento_escuela WHERE escuela=?',
    [req.params.clave],
    { prepare: true },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result.rows);
    }
  );
};

module.exports = {
  getAlumnos,
  getAlumno,
  getEscuelas,
  getEscuela,
  getDocentes,
  getDocente,
  getAdmistrativos,
  getAdmistrativo,
  getMantenimientos,
  getMantenimiento,
  getTutorados,
  getDocentesEscuela,
  getAdministrativosEscuela,
  getMantenimientosEscuela,
};
