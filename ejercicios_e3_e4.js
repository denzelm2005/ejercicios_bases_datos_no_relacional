// Archivo: ejercicios_e3_e4.js

// Colección de pacientes (pegamos el JSON del archivo)
const pacientes = [
  // 🔹 Aquí iría todo el JSON del archivo pacientes.txt (lo copias tal cual)

  {
    "id": "pac1",
    "nombre": "Juan López",
    "edad": 45,
    "genero": "masculino",
    "activo": true,
    "fecha_ingreso": "2025-08-15T10:00:00Z",
    "diagnostico": {
      "tipo": "hipertensión",
      "detalles": {
        "sintomas": ["dolor de cabeza", "fatiga"],
        "gravedad": "moderada"
      }
    },
    "direccion": {
      "calle": "Calle Central 123",
      "ciudad": "Managua",
      "pais": "Nicaragua",
      "codigo_postal": "11001",
      "coordenadas": {
        "latitud": 12.114993,
        "longitud": -86.236174
      }
    },
    "familiares": [
      {
        "nombre": "María López",
        "relacion": "esposa",
        "edad": 42
      }
    ],
    "historial_medico": [
      {
        "fecha": "2025-07-20T14:30:00Z",
        "evento": "consulta inicial",
        "detalles": {
          "doctor": "Dr. Ramírez"
        }
      }
    ],
    "ultima_visita": "2025-08-20T15:45:00Z"
  },
  {
    "id": "pac2",
    "nombre": "Ana Martínez",
    "edad": 32,
    "genero": "femenino",
    "activo": false,
    "fecha_ingreso": "2025-06-10T09:15:00Z",
    "diagnostico": {
      "tipo": "diabetes",
      "detalles": {
        "sintomas": ["sed excesiva", "pérdida de peso"],
        "gravedad": {
          "nivel": "alta",
          "complicaciones": ["retinopatía"]
        }
      }
    },
    "direccion": {
      "calle": "Avenida Bolívar 456",
      "ciudad": "León",
      "pais": "Nicaragua",
      "codigo_postal": "21000"
    },
    "familiares": [
      {
        "nombre": "Pedro Martínez",
        "relacion": "esposo",
        "edad": 35,
        "contacto": {
          "telefono": "555-1234"
        }
      },
      {
        "nombre": "Luis Martínez",
        "relacion": "hijo",
        "edad": 10
      }
    ],
    "historial_medico": [],
    "puntuacion_salud": 3.5,
    "ultima_visita": "2025-07-05T11:20:00Z"
  },
  {
    "id": "pac3",
    "nombre": "Carlos Ramírez",
    "edad": 60,
    "genero": "masculino",
    "activo": true,
    "fecha_ingreso": "2025-05-22T13:45:00Z",
    "diagnostico": "asma",
    "direccion": {
      "calle": "Calle Real 789",
      "ciudad": "Granada",
      "pais": "Nicaragua",
      "codigo_postal": "43000",
      "coordenadas": {
        "latitud": 11.929889,
        "longitud": -85.956016,
        "altitud": 50
      }
    },
    "familiares": [],
    "historial_medico": [
      {
        "fecha": "2025-06-01T10:00:00Z",
        "evento": {
          "descripcion": "ataque de asma",
          "tratamiento": {
            "medicamento": "inhalador",
            "dosis": "2 puffs"
          }
        }
      },
      {
        "fecha": "2025-07-15T14:30:00Z",
        "evento": {
          "descripcion": "revisión",
          "tratamiento": {
            "medicamento": "corticoides",
            "dosis": "10mg"
          }
        }
      }
    ],
    "puntuacion_salud": null,
    "ultima_visita": "2025-08-18T16:10:00Z"
  },
  {
    "id": "pac4",
    "nombre": "Sofía Herrera",
    "edad": 28,
    "genero": "femenino",
    "activo": true,
    "fecha_ingreso": "2025-04-18T08:30:00Z",
    "diagnostico": {
      "tipo": {
        "principal": "anemia",
        "secundario": "fatiga crónica"
      },
      "detalles": {
        "sintomas": ["debilidad", "palidez"],
        "gravedad": "baja",
        "analisis": {
          "hemoglobina": 9.5
        }
      }
    },
    "direccion": {
      "calle": "Barrio San Judas 101",
      "ciudad": "Matagalpa",
      "pais": "Nicaragua",
      "codigo_postal": "61000"
    },
    "familiares": [
      {
        "nombre": "Elena Herrera",
        "relacion": "madre",
        "edad": 55
      }
    ],
    "historial_medico": [
      {
        "fecha": "2025-05-10T12:00:00Z",
        "evento": "transfusión",
        "detalles": {
          "cantidad": "1 unidad",
          "tipo_sangre": "O+"
        }
      }
    ],
    "ultima_visita": "2025-08-19T09:45:00Z"
  },
  {
    "id": "pac5",
    "nombre": "Miguel Ortega",
    "edad": 50,
    "genero": "masculino",
    "activo": false,
    "fecha_ingreso": "2025-03-05T11:20:00Z",
    "diagnostico": {
      "tipo": "artritis",
      "detalles": {
        "sintomas": {
          "principales": ["dolor articular", "inflamación"],
          "secundarios": ["rigidez matutina"]
        },
        "gravedad": "moderada",
        "tratamiento": {
          "medicamentos": ["ibuprofeno"],
          "dosis": "400mg"
        }
      }
    },
    "direccion": {
      "calle": "Calle La Libertad 234",
      "ciudad": "Estelí",
      "pais": "Nicaragua",
      "codigo_postal": "31000",
      "coordenadas": {
        "latitud": 13.091394,
        "longitud": -86.353844
      }
    },
    "familiares": [
      {
        "nombre": "Rosa Ortega",
        "relacion": "esposa",
        "edad": 48,
        "contacto": {
          "telefono": "555-5678",
          "email": "rosa@example.com"
        }
      },
      {
        "nombre": "Juan Ortega",
        "relacion": "hijo",
        "edad": 22
      }
    ],
    "historial_medico": [],
    "puntuacion_salud": 4.2,
    "ultima_visita": "2025-06-25T13:30:00Z"
  },
  {
    "id": "pac6",
    "nombre": "Laura Vargas",
    "edad": 22,
    "genero": "femenino",
    "activo": true,
    "fecha_ingreso": "2025-02-14T15:50:00Z",
    "diagnostico": "migraña",
    "direccion": {
      "calle": "Avenida Central 567",
      "ciudad": "Jinotega",
      "pais": "Nicaragua",
      "codigo_postal": "65000"
    },
    "familiares": [],
    "historial_medico": [
      {
        "fecha": "2025-03-01T09:00:00Z",
        "evento": "episodio agudo",
        "detalles": {
          "duracion": "4 horas",
          "intensidad": {
            "nivel": "alta",
            "sintomas": ["náuseas", "fotofobia"]
          }
        }
      }
    ],
    "ultima_visita": "2025-08-17T10:15:00Z"
  },
  {
    "id": "pac7",
    "nombre": "Roberto Castillo",
    "edad": 38,
    "genero": "masculino",
    "activo": true,
    "fecha_ingreso": "2025-01-09T14:10:00Z",
    "diagnostico": {
      "tipo": "gastritis",
      "detalles": {
        "sintomas": ["acidez", "dolor abdominal"],
        "gravedad": {
          "nivel": "media",
          "causas": {
            "principales": ["estrés", "dieta"]
          }
        }
      }
    },
    "direccion": {
      "calle": "Barrio Las Palmas 890",
      "ciudad": "Chinandega",
      "pais": "Nicaragua",
      "codigo_postal": "25000",
      "coordenadas": {
        "latitud": 12.6294,
        "longitud": -87.1311
      }
    },
    "familiares": [
      {
        "nombre": "Teresa Castillo",
        "relacion": "esposa",
        "edad": 36
      }
    ],
    "historial_medico": [
      {
        "fecha": "2025-02-20T11:45:00Z",
        "evento": {
          "descripcion": "endoscopía",
          "resultado": {
            "hallazgos": "inflamación leve",
            "recomendaciones": ["dieta blanda"]
          }
        }
      },
      {
        "fecha": "2025-04-15T13:20:00Z",
        "evento": {
          "descripcion": "seguimiento",
          "resultado": {
            "hallazgos": "mejoría",
            "recomendaciones": ["continuar medicamento"]
          }
        }
      }
    ],
    "puntuacion_salud": null,
    "ultima_visita": "2025-08-16T12:00:00Z"
  },
  {
    "id": "pac8",
    "nombre": "Gabriela Soto",
    "edad": 65,
    "genero": "femenino",
    "activo": false,
    "fecha_ingreso": "2025-07-30T16:40:00Z",
    "diagnostico": {
      "tipo": {
        "principal": "osteoporosis",
        "secundario": {
          "asociado": "fractura de cadera"
        }
      },
      "detalles": {
        "sintomas": ["dolor óseo", "pérdida de altura"],
        "gravedad": "alta"
      }
    },
    "direccion": {
      "calle": "Calle El Triunfo 112",
      "ciudad": "Masaya",
      "pais": "Nicaragua",
      "codigo_postal": "41000"
    },
    "familiares": [
      {
        "nombre": "Antonio Soto",
        "relacion": "hijo",
        "edad": 40,
        "contacto": {
          "telefono": "555-9012"
        }
      }
    ],
    "historial_medico": [
      {
        "fecha": "2025-08-05T08:50:00Z",
        "evento": "cirugía",
        "detalles": {
          "tipo": "reemplazo de cadera",
          "duracion": "2 horas"
        }
      }
    ],
    "ultima_visita": "2025-08-20T14:30:00Z"
  },
  {
    "id": "pac9",
    "nombre": "José Mendoza",
    "edad": 41,
    "genero": "masculino",
    "activo": true,
    "fecha_ingreso": "2025-08-01T12:25:00Z",
    "diagnostico": "hipertiroidismo",
    "direccion": {
      "calle": "Avenida Sandino 345",
      "ciudad": "Rivas",
      "pais": "Nicaragua",
      "codigo_postal": "47000",
      "coordenadas": {
        "latitud": 11.4372,
        "longitud": -85.8263,
        "altitud": {
          "metros": 60
        }
      }
    },
    "familiares": [],
    "historial_medico": [],
    "puntuacion_salud": 4.0,
    "ultima_visita": "2025-08-19T17:00:00Z"
  },
  {
    "id": "pac10",
    "nombre": "Patricia Núñez",
    "edad": 29,
    "genero": "femenino",
    "activo": true,
    "fecha_ingreso": "2025-08-10T10:55:00Z",
    "diagnostico": {
      "tipo": "alergia",
      "detalles": {
        "sintomas": {
          "principales": ["estornudos", "picazón"],
          "secundarios": ["congestión"]
        },
        "alergenos": ["polen", "ácaros"],
        "tratamiento": {
          "medicamentos": {
            "antihistamínicos": "loratadina"
          },
          "dosis": "10mg diario"
        }
      }
    },
    "direccion": {
      "calle": "Barrio Monimbó 678",
      "ciudad": "Bluefields",
      "pais": "Nicaragua",
      "codigo_postal": "81000"
    },
    "familiares": [
      {
        "nombre": "Carlos Núñez",
        "relacion": "hermano",
        "edad": 32
      },
      {
        "nombre": "Ana Núñez",
        "relacion": "madre",
        "edad": 58,
        "contacto": {
          "telefono": "555-3456"
        }
      }
    ],
    "historial_medico": [
      {
        "fecha": "2025-08-12T15:10:00Z",
        "evento": "prueba de alergia",
        "detalles": {
          "resultados": "positivo a polen",
          "notas": {
            "doctor": "Dr. González",
            "recomendaciones": "evitar exposición"
          }
        }
      }
    ],
    "ultima_visita": "2025-08-20T11:40:00Z"
  }

];

// 🔹 Funciones flecha solicitadas:

// 1. Obtén el nombre del paciente con id "pac1".
const nombrePac1 = () => pacientes.find(p => p.id === "pac1").nombre;

// 2. Accede a la gravedad de los detalles del diagnóstico del paciente con id "pac1".
const gravedadPac1 = () => pacientes.find(p => p.id === "pac1").diagnostico.detalles.gravedad;

// 3. Obtén el primer síntoma de los detalles del diagnóstico del paciente con id "pac2".
const primerSintomaPac2 = () => pacientes.find(p => p.id === "pac2").diagnostico.detalles.sintomas[0];

// 4. Accede al teléfono del contacto del primer familiar del paciente con id "pac2".
const telefonoFamiliarPac2 = () => pacientes.find(p => p.id === "pac2").familiares[0].contacto.telefono;

// 5. Obtén la altitud de las coordenadas de la dirección del paciente con id "pac3".
const altitudPac3 = () => pacientes.find(p => p.id === "pac3").direccion.coordenadas.altitud;

// 6. Accede a la dosis del tratamiento del primer evento en el historial médico del paciente con id "pac3".
const dosisPrimerEventoPac3 = () => pacientes.find(p => p.id === "pac3").historial_medico[0].evento.tratamiento.dosis;

// 7. Obtén la hemoglobina del análisis de los detalles del diagnóstico del paciente con id "pac4".
const hemoglobinaPac4 = () => pacientes.find(p => p.id === "pac4").diagnostico.detalles.analisis.hemoglobina;

// 8. Accede al tipo de sangre de los detalles del primer evento en el historial médico del paciente con id "pac4".
const tipoSangrePac4 = () => pacientes.find(p => p.id === "pac4").historial_medico[0].detalles.tipo_sangre;

// 9. Obtén el email del contacto del primer familiar del paciente con id "pac5".
const emailFamiliarPac5 = () => pacientes.find(p => p.id === "pac5").familiares[0].contacto.email;

// 10. Accede a la dosis de los medicamentos del tratamiento de los detalles del diagnóstico del paciente con id "pac5".
const dosisMedicPac5 = () => pacientes.find(p => p.id === "pac5").diagnostico.detalles.tratamiento.dosis;

// 11. Obtén el nombre del paciente con id "pac6".
const nombrePac6 = () => pacientes.find(p => p.id === "pac6").nombre;

// 12. Accede al nivel de intensidad de los detalles del primer evento en el historial médico del paciente con id "pac6".
const intensidadPac6 = () => pacientes.find(p => p.id === "pac6").historial_medico[0].detalles.intensidad.nivel;

// 13. Obtén la edad del primer familiar del paciente con id "pac7".
const edadFamiliarPac7 = () => pacientes.find(p => p.id === "pac7").familiares[0].edad;

// 14. Accede a las recomendaciones del resultado del primer evento en el historial médico del paciente con id "pac7".
const recomendacionesPac7 = () => pacientes.find(p => p.id === "pac7").historial_medico[0].evento.resultado.recomendaciones;

// 15. Obtén la gravedad de los detalles del diagnóstico del paciente con id "pac8".
const gravedadPac8 = () => pacientes.find(p => p.id === "pac8").diagnostico.detalles.gravedad;

// 16. Accede al tipo de la cirugía de los detalles del primer evento en el historial médico del paciente con id "pac8".
const tipoCirugiaPac8 = () => pacientes.find(p => p.id === "pac8").historial_medico[0].detalles.tipo;

// 17. Obtén el diagnóstico del paciente con id "pac9".
const diagnosticoPac9 = () => pacientes.find(p => p.id === "pac9").diagnostico;

// 18. Accede a los metros de la altitud de las coordenadas de la dirección del paciente con id "pac9".
const metrosAltitudPac9 = () => pacientes.find(p => p.id === "pac9").direccion.coordenadas.altitud.metros;

// 19. Obtén la dosis diaria del tratamiento de los medicamentos de los detalles del diagnóstico del paciente con id "pac10".
const dosisDiariaPac10 = () => pacientes.find(p => p.id === "pac10").diagnostico.detalles.tratamiento.dosis;

// 20. Accede a las recomendaciones de las notas de los detalles del primer evento en el historial médico del paciente con id "pac10".
const recomendacionesPac10 = () => pacientes.find(p => p.id === "pac10").historial_medico[0].detalles.notas.recomendaciones;


// 🔹 Probamos en consola:
console.log("1)", nombrePac1());
console.log("2)", gravedadPac1());
console.log("3)", primerSintomaPac2());
console.log("4)", telefonoFamiliarPac2());
console.log("5)", altitudPac3());
console.log("6)", dosisPrimerEventoPac3());
console.log("7)", hemoglobinaPac4());
console.log("8)", tipoSangrePac4());
console.log("9)", emailFamiliarPac5());
console.log("10)", dosisMedicPac5());
console.log("11)", nombrePac6());
console.log("12)", intensidadPac6());
console.log("13)", edadFamiliarPac7());
console.log("14)", recomendacionesPac7());
console.log("15)", gravedadPac8());
console.log("16)", tipoCirugiaPac8());
console.log("17)", diagnosticoPac9());
console.log("18)", metrosAltitudPac9());
console.log("19)", dosisDiariaPac10());
console.log("20)", recomendacionesPac10());
