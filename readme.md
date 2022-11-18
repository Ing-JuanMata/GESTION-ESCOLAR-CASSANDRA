# API SOBRE GESTION ESCOLAR CON CASSANDRA (CASO 3)

> Esta api debe ser usada corriendo un contenedor con casssandra y publicando por lo menos el puerto 9042 en su equipo ademas de un contenedor de redis con el puerto 6379 publicado en su equipo

---

# RUTAS DE LA API

## ALUMNOS

### GET

- **CONSULTA DE TODOS LOS ALUMNOS**

**RUTA** `localhost:3000/alumnos`

**RESPUESTA**

```json
[
  {
    "curp": "81",
    "escuela": "3",
    "fecha_inscripcion": "10-10-2022",
    "fecha_nacimiento": "02-09-1980",
    "grado": "Preescolar",
    "nombre": "Irma Perez",
    "tutor": "6",
    "tutoria_firmada": false
  },
  {
    "curp": "19",
    "escuela": "1",
    "fecha_inscripcion": "10-10-2022",
    "fecha_nacimiento": "01-09-1980",
    "grado": "Preescolar",
    "nombre": "Alexis",
    "tutor": "1",
    "tutoria_firmada": false
  },
  {
    "curp": "21",
    "escuela": "2",
    "fecha_inscripcion": "10-10-2022",
    "fecha_nacimiento": "03-09-1980",
    "grado": "Preescolar",
    "nombre": "Alfredo",
    "tutor": "3",
    "tutoria_firmada": false
  },
  {
    "curp": "20",
    "escuela": "1",
    "fecha_inscripcion": "10-10-2022",
    "fecha_nacimiento": "02-09-1980",
    "grado": "Preescolar",
    "nombre": "Alonso",
    "tutor": "2",
    "tutoria_firmada": false
  },
  {
    "curp": "22",
    "escuela": "2",
    "fecha_inscripcion": "10-10-2022",
    "fecha_nacimiento": "04-09-1980",
    "grado": "Preescolar",
    "nombre": "Alexa",
    "tutor": "4",
    "tutoria_firmada": false
  },
  {
    "curp": "23",
    "escuela": "3",
    "fecha_inscripcion": "10-10-2022",
    "fecha_nacimiento": "05-09-1980",
    "grado": "Preescolar",
    "nombre": "Ximena",
    "tutor": "5",
    "tutoria_firmada": false
  },
  {
    "curp": "24",
    "escuela": "3",
    "fecha_inscripcion": "10-10-2022",
    "fecha_nacimiento": "06-09-1980",
    "grado": "Preescolar",
    "nombre": "Daniel",
    "tutor": "6",
    "tutoria_firmada": false
  },
  {
    "curp": "80",
    "escuela": "3",
    "fecha_inscripcion": "10-10-2022",
    "fecha_nacimiento": "02-09-1980",
    "grado": "Preescolar",
    "nombre": "Juan Perez",
    "tutor": "6",
    "tutoria_firmada": false
  }
]
```

- **CONSULTA DE UN ALUMNO**

**RUTA** `localhost:3000/alumnos/:curp`

**EJEMPLO** `localhost:3000/alumnos/81`

```json
{
  "curp": "81",
  "escuela": "3",
  "fecha_inscripcion": "10-10-2022",
  "fecha_nacimiento": "02-09-1980",
  "grado": "Preescolar",
  "nombre": "Irma Perez",
  "tutor": "6",
  "tutoria_firmada": false
}
```

### POST

- **RUTA DE POST** `localhost:3000/alumno`

- **EJEMPLO**

```json
{
  "curp": "81",
  "nombre": "Irma Perez",
  "fecha_nacimiento": "02-09-1980",
  "tutor": "6",
  "tutoria_firmada": false,
  "grado": "Preescolar",
  "fecha_inscripcion": "10-10-2022",
  "escuela": "3"
}
```

- **RESPUESTA**

```json
{
  "info": {
    "queriedHost": "127.0.0.1:9042",
    "triedHosts": {
      "127.0.0.1:9042": null
    },
    "speculativeExecutions": 0,
    "isSchemaInAgreement": true
  },
  "columns": null,
  "pageState": null
}
```

## ADMINISTRATIVOS

### GET

- **CONSULTA DE TODOS LOS ADMINISTRATIVOS**

**RUTA** `localhost:3000/administrativos`

**RESPUESTA**

```json
[
  {
    "curp": "16",
    "correo": "subcoordinacion2@mail.com",
    "cuenta": "951753462",
    "escuela": "2",
    "extension": "2",
    "funcion": "Subcoordinador",
    "hora_entrada": "7:00",
    "hora_salida": "14:00",
    "nombre": "Raquel",
    "telefono": "456"
  },
  {
    "curp": "13",
    "correo": "coordinacion@mail.com",
    "cuenta": "963852741",
    "escuela": "1",
    "extension": "1",
    "funcion": "Coordinador",
    "hora_entrada": "7:00",
    "hora_salida": "14:00",
    "nombre": "Jose",
    "telefono": "123"
  },
  {
    "curp": "17",
    "correo": "coordinacion3@mail.com",
    "cuenta": "963852741",
    "escuela": "3",
    "extension": "1",
    "funcion": "Coordinador",
    "hora_entrada": "7:00",
    "hora_salida": "14:00",
    "nombre": "Alondra",
    "telefono": "123"
  },
  {
    "curp": "15",
    "correo": "coordinacion2@mail.com",
    "cuenta": "963852741",
    "escuela": "2",
    "extension": "1",
    "funcion": "Coordinador",
    "hora_entrada": "7:00",
    "hora_salida": "14:00",
    "nombre": "Alonso",
    "telefono": "123"
  },
  {
    "curp": "18",
    "correo": "subcoordinacion3@mail.com",
    "cuenta": "951753462",
    "escuela": "3",
    "extension": "2",
    "funcion": "Subcoordinador",
    "hora_entrada": "7:00",
    "hora_salida": "14:00",
    "nombre": "Francisco",
    "telefono": "456"
  },
  {
    "curp": "14",
    "correo": "subcoordinacion@mail.com",
    "cuenta": "951753462",
    "escuela": "1",
    "extension": "2",
    "funcion": "Subcoordinador",
    "hora_entrada": "7:00",
    "hora_salida": "14:00",
    "nombre": "Rafael",
    "telefono": "456"
  }
]
```

- **CONSULTA DE UN ADMINISTRATIVO**

**RUTA** `localhost:3000/administrativos/:id`

**EJEMPLO** `localhost:3000/administrativos/16`

```json
{
  "curp": "16",
  "correo": "subcoordinacion2@mail.com",
  "cuenta": "951753462",
  "escuela": "2",
  "extension": "2",
  "funcion": "Subcoordinador",
  "hora_entrada": "7:00",
  "hora_salida": "14:00",
  "nombre": "Raquel",
  "telefono": "456"
}
```

### POST

- **RUTA DE POST** `localhost:3000/administrativo`
- **EJEMPLO**

```json
{
  "curp": "18",
  "nombre": "Francisco",
  "telefono": "456",
  "cuenta": "951753462",
  "funcion": "Subcoordinador",
  "extension": "2",
  "correo": "subcoordinacion3@mail.com",
  "escuela": "3",
  "hora_entrada": "7:00",
  "hora_salida": "14:00"
}
```

- **RESPUESTA**

```json
{
  "info": {
    "queriedHost": "127.0.0.1:9042",
    "triedHosts": {
      "127.0.0.1:9042": null
    },
    "speculativeExecutions": 0,
    "isSchemaInAgreement": true
  },
  "columns": null,
  "pageState": null
}
```

## DOCENTES

### GET

- **CONSULTA DE TODOS LOS DOCENTES**

**RUTA** `localhost:3000/docentes`

**RESPUESTA**

```json
[
  {
    "curp": "6",
    "cuenta": "99887766",
    "escuela": "3",
    "especialidad": "Primaria",
    "grado": "Licenciatura",
    "nombre": "Ernesto",
    "numero_oficina": 2,
    "telefono": "456",
    "tutorias_firmadas": false
  },
  {
    "curp": "4",
    "cuenta": "5544332211",
    "escuela": "2",
    "especialidad": "Primaria",
    "grado": "Licenciatura",
    "nombre": "Julian",
    "numero_oficina": 2,
    "telefono": "456",
    "tutorias_firmadas": false
  },
  {
    "curp": "3",
    "cuenta": "1122334455",
    "escuela": "2",
    "especialidad": "Preescolar",
    "grado": "Maestria",
    "nombre": "Jorge",
    "numero_oficina": 1,
    "telefono": "123",
    "tutorias_firmadas": false
  },
  {
    "curp": "5",
    "cuenta": "66778899",
    "escuela": "3",
    "especialidad": "Preescolar",
    "grado": "Maestria",
    "nombre": "Armando",
    "numero_oficina": 1,
    "telefono": "123",
    "tutorias_firmadas": false
  },
  {
    "curp": "2",
    "cuenta": "987654321",
    "escuela": "1",
    "especialidad": "Primaria",
    "grado": "Licenciatura",
    "nombre": "Jesus",
    "numero_oficina": 2,
    "telefono": "456",
    "tutorias_firmadas": false
  },
  {
    "curp": "1",
    "cuenta": "123456789",
    "escuela": "1",
    "especialidad": "Preescolar",
    "grado": "Maestria",
    "nombre": "Juan",
    "numero_oficina": 1,
    "telefono": "123",
    "tutorias_firmadas": false
  }
]
```

- **CONSULTA DE UN DOCENTE**

**RUTA** `localhost:3000/docentes/:curp`

**EJEMPLO** `localhost:3000/docentes/6`

```json
{
  "curp": "6",
  "cuenta": "99887766",
  "escuela": "3",
  "especialidad": "Primaria",
  "grado": "Licenciatura",
  "nombre": "Ernesto",
  "numero_oficina": 2,
  "telefono": "456",
  "tutorias_firmadas": false
}
```

### POST

- **RUTA DE POST** `localhost:3000/docente`
- **EJEMPLO**

```json
{
  "curp": "60",
  "nombre": "Juan Perez",
  "telefono": "456",
  "cuenta": "99887766",
  "numero_oficina": 2,
  "especialidad": "Primaria",
  "grado": "Licenciatura",
  "tutorias_firmadas": false,
  "escuela": "3"
}
```

- **RESPUESTA**

```json
{
  "info": {
    "queriedHost": "127.0.0.1:9042",
    "triedHosts": {
      "127.0.0.1:9042": null
    },
    "speculativeExecutions": 0,
    "isSchemaInAgreement": true
  },
  "columns": null,
  "pageState": null
}
```

## ESCUELAS

### GET

- **CONSULTA DE TODOS LAS ESCUELAS**

**RUTA** `localhost:3000/escuelas`

**RESPUESTA**

```json
[
  {
    "clave": "3",
    "ciudad": "Tepic",
    "direccion": "P. Sanchez",
    "nombre": "Universidad Vizcaya"
  },
  {
    "clave": "2",
    "ciudad": "Xalisco",
    "direccion": "Boulevard Tepic, Xalisco",
    "nombre": "Universidad Tecnologica"
  },
  {
    "clave": "1",
    "ciudad": "Tepic",
    "direccion": "Lagos del country",
    "nombre": "Instituto Tecnologico de Tepic"
  }
]
```

- **CONSULTA DE UNA ESCUELA**

**RUTA** `localhost:3000/escuelas/:clave`

**EJEMPLO** `localhost:3000/escuelas/3`

```json
{
  "clave": "3",
  "ciudad": "Tepic",
  "direccion": "P. Sanchez",
  "nombre": "Universidad Vizcaya"
}
```

### POST

- **RUTA DE POST** `localhost:3000/escuela`
- **EJEMPLO**

```json
{
  "clave": "3",
  "ciudad": "Tepic",
  "direccion": "P. Sanchez",
  "nombre": "Universidad Vizcaya"
}
```

- **RESPUESTA**

```json
{
  "info": {
    "queriedHost": "127.0.0.1:9042",
    "triedHosts": {
      "127.0.0.1:9042": null
    },
    "speculativeExecutions": 0,
    "achievedConsistency": 10,
    "isSchemaInAgreement": true
  },
  "columns": null,
  "pageState": null
}
```

## MANTENIMIENTO

### GET

- **CONSULTA DE TODO EL PERSONAL DE MANTENIMIENTO**

**RUTA** `localhost:3000/mantenimientos`

**RESPUESTA**

```json
[
  {
    "curp": "7",
    "cuenta": "66778899",
    "escuela": "1",
    "especialidad": "Electrica",
    "nombre": "Jose",
    "telefono": "123",
    "telefono_institucional": "1234567890"
  },
  {
    "curp": "9",
    "cuenta": "111222333",
    "escuela": "2",
    "especialidad": "Electrica",
    "nombre": "Luis",
    "telefono": "123",
    "telefono_institucional": "1234567890"
  },
  {
    "curp": "10",
    "cuenta": "444555666",
    "escuela": "2",
    "especialidad": "Carpinteria",
    "nombre": "Lazaro",
    "telefono": "456",
    "telefono_institucional": "0987654321"
  },
  {
    "curp": "8",
    "cuenta": "99887766",
    "escuela": "1",
    "especialidad": "Carpinteria",
    "nombre": "Enrique",
    "telefono": "456",
    "telefono_institucional": "0987654321"
  },
  {
    "curp": "12",
    "cuenta": "369258147",
    "escuela": "3",
    "especialidad": "Carpinteria",
    "nombre": "Antonio",
    "telefono": "456",
    "telefono_institucional": "0987654321"
  },
  {
    "curp": "11",
    "cuenta": "321654987",
    "escuela": "3",
    "especialidad": "Electrica",
    "nombre": "Tanya",
    "telefono": "456",
    "telefono_institucional": "1234567890"
  }
]
```

- **CONSULTA DE UN MANTENIMIENTO**

**RUTA** `localhost:3000/mantenimiento/:curp`

**EJEMPLO** `localhost:3000/mantenimiento/12`

```json
{
  "curp": "12",
  "cuenta": "369258147",
  "escuela": "3",
  "especialidad": "Carpinteria",
  "nombre": "Antonio",
  "telefono": "456",
  "telefono_institucional": "0987654321"
}
```

### POST

- **RUTA DE POST** `localhost:3000/mantenimiento`
- **EJEMPLO**

```json
{
  "curp": "11",
  "nombre": "Tanya",
  "telefono": "456",
  "cuenta": "321654987",
  "telefono_institucional": "1234567890",
  "especialidad": "Electrica",
  "escuela": "3"
}
```

- **RESPUESTA**

```json
{
  "info": {
    "queriedHost": "127.0.0.1:9042",
    "triedHosts": {
      "127.0.0.1:9042": null
    },
    "speculativeExecutions": 0,
    "isSchemaInAgreement": true
  },
  "columns": null,
  "pageState": null
}
```

# QUERIES EXTRAS
## TUTORADOS DE UN DOCENTE
- **RUTA DE GET** `localhost:3000/docentes/:curp/tutorados`
- **EJEMPLO** `localhost:3000/6/tutorados`
- **RESPUESTA**
```json
[
    {
        "tutor": "6",
        "curp": "24",
        "escuela": "3",
        "fecha_inscripcion": "10-10-2022",
        "fecha_nacimiento": "06-09-1980",
        "grado": "Preescolar",
        "nombre": "Daniel",
        "tutoria_firmada": false
    },
    {
        "tutor": "6",
        "curp": "80",
        "escuela": "3",
        "fecha_inscripcion": "10-10-2022",
        "fecha_nacimiento": "02-09-1980",
        "grado": "Preescolar",
        "nombre": "Juan Perez",
        "tutoria_firmada": false
    },
    {
        "tutor": "6",
        "curp": "81",
        "escuela": "3",
        "fecha_inscripcion": "10-10-2022",
        "fecha_nacimiento": "02-09-1980",
        "grado": "Preescolar",
        "nombre": "Irma Perez",
        "tutoria_firmada": false
    }
]
```

## DOCENTES DE UNA ESCUELA
- **RUTA DE GET** `localhost:3000/escuelas/:clave/docentes`
- **EJEMPLO** `localhost:3000/escuelas/3/docentes`
- **RESPUESTA**

```json
[
    {
        "escuela": "3",
        "curp": "5",
        "cuenta": "66778899",
        "especialidad": "Preescolar",
        "grado": "Maestria",
        "nombre": "Armando",
        "numero_oficina": 1,
        "telefono": "123",
        "tutorias_firmadas": false
    },
    {
        "escuela": "3",
        "curp": "6",
        "cuenta": "99887766",
        "especialidad": "Primaria",
        "grado": "Licenciatura",
        "nombre": "Ernesto",
        "numero_oficina": 2,
        "telefono": "456",
        "tutorias_firmadas": false
    },
    {
        "escuela": "3",
        "curp": "60",
        "cuenta": "99887766",
        "especialidad": "Primaria",
        "grado": "Licenciatura",
        "nombre": "Juan Perez",
        "numero_oficina": 2,
        "telefono": "456",
        "tutorias_firmadas": false
    }
]
```

## ADMINISTRATIVOS DE UNA ESCUELA
- **RUTA DE GET** `localhost:3000/escuelas/:clave/administrativos`
- **EJEMPLO** `localhost:3000/escuelas/3/administrativos`
- **RESPUESTA**
```json
[
    {
        "escuela": "3",
        "curp": "17",
        "correo": "coordinacion3@mail.com",
        "cuenta": "963852741",
        "extension": "1",
        "funcion": "Coordinador",
        "hora_entrada": "7:00",
        "hora_salida": "14:00",
        "nombre": "Alondra",
        "telefono": "123"
    },
    {
        "escuela": "3",
        "curp": "18",
        "correo": "subcoordinacion3@mail.com",
        "cuenta": "951753462",
        "extension": "2",
        "funcion": "Subcoordinador",
        "hora_entrada": "7:00",
        "hora_salida": "14:00",
        "nombre": "Francisco",
        "telefono": "456"
    }
]
```