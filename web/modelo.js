// Generado por el cuaderno plantilla_tu_modelo.ipynb. No lo edites a mano.
window.MODELO = {
  "version": "2.0.0",
  "proyecto": "Riesgo de oferente único en SECOP II",
  "fuente": {
    "nombre": "SECOP II - Procesos de Contratación (ANCP-CCE, datos.gov.co, CC BY-SA 4.0), procesos TIC seleccionados 2023-2025",
    "url": "https://www.datos.gov.co/d/p6dx-8zbt",
    "portal": "datos.gov.co",
    "id": "p6dx-8zbt"
  },
  "fecha_entrenamiento": "2026-10-06",
  "n_total": 20811,
  "n_entrenamiento": 16648,
  "n_prueba": 4163,
  "semilla": 42,
  "min_casos": 83,
  "sklearn_version": "1.9.1",
  "objetivo": {
    "nombre": "oferente_unico",
    "etiqueta": "Probabilidad de oferente único",
    "minimo": 0.0,
    "maximo": 100.0,
    "unidad": "%",
    "tipo": "probabilidad"
  },
  "metricas": {
    "modelo": {
      "clave": "lineal",
      "nombre": "Regresión lineal (Ridge)",
      "mae": 37.807308142763446,
      "rmse": 43.2326017677511,
      "r2": 0.14031895486272072,
      "exactitud": 0.7165505644967571,
      "publicado": true
    },
    "linea_base": {
      "clave": "linea_base",
      "nombre": "Línea base: siempre el promedio",
      "mae": 43.68487613645899,
      "rmse": 46.630927019683114,
      "r2": -0.00014439369196028728,
      "exactitud": 0.6805188565938025
    },
    "comparacion": [
      {
        "clave": "linea_base",
        "nombre": "Línea base: siempre el promedio",
        "mae": 43.68487613645899,
        "rmse": 46.630927019683114,
        "r2": -0.00014439369196028728,
        "exactitud": 0.6805188565938025
      },
      {
        "clave": "lineal",
        "nombre": "Regresión lineal (Ridge)",
        "mae": 37.807308142763446,
        "rmse": 43.2326017677511,
        "r2": 0.14031895486272072,
        "exactitud": 0.7165505644967571,
        "publicado": true
      },
      {
        "clave": "arbol",
        "nombre": "Árbol de decisión",
        "mae": 38.94372895444437,
        "rmse": 44.16657828255293,
        "r2": 0.10277345243147262,
        "exactitud": 0.7052606293538314
      },
      {
        "clave": "bosque",
        "nombre": "Bosque aleatorio (50 árboles)",
        "mae": 38.091628706742526,
        "rmse": 43.09580080598726,
        "r2": 0.14575092610072127,
        "exactitud": 0.7244775402354071
      },
      {
        "clave": "boosting",
        "nombre": "Gradient Boosting",
        "mae": 36.841818352473965,
        "rmse": 42.69087504500437,
        "r2": 0.16172846387535744,
        "exactitud": 0.7302426134998798
      }
    ]
  },
  "cobertura_mae": 0.5452798462647129,
  "promedio_nacional": 32.39632886454279,
  "promedio_entrenamiento": 32.50840941854877,
  "tipo": "lineal",
  "algoritmo": "Ridge (alpha = 1) con codificación one-hot",
  "algoritmo_corto": "Regresión lineal",
  "variables": [
    {
      "nombre": "modalidad",
      "etiqueta": "Modalidad de contratación",
      "etiqueta_corta": "Modalidad de contratación",
      "grupo": "caso",
      "ayuda": "",
      "tipo": "categoria",
      "mas_frecuente": "Mínima cuantía",
      "categorias": [
        {
          "valor": "Concurso de méritos abierto",
          "etiqueta": "Concurso de méritos abierto",
          "coeficiente": -12.46886852623256,
          "frecuencia": 0.12758289283998078,
          "n": 2124,
          "en_formulario": true
        },
        {
          "valor": "Licitación pública",
          "etiqueta": "Licitación pública",
          "coeficiente": 6.532310201116709,
          "frecuencia": 0.02186448822681403,
          "n": 364,
          "en_formulario": true
        },
        {
          "valor": "Licitación pública de obra pública",
          "etiqueta": "Licitación pública de obra pública",
          "coeficiente": -8.374427694979522,
          "frecuencia": 0.01231379144641999,
          "n": 205,
          "en_formulario": true
        },
        {
          "valor": "Mínima cuantía",
          "etiqueta": "Mínima cuantía",
          "coeficiente": -14.415267272556507,
          "frecuencia": 0.6729336857280154,
          "n": 11203,
          "en_formulario": true
        },
        {
          "valor": "Selección abreviada de menor cuantía",
          "etiqueta": "Selección abreviada de menor cuantía",
          "coeficiente": 19.06368333098235,
          "frecuencia": 0.00931042767900048,
          "n": 155,
          "en_formulario": true
        },
        {
          "valor": "Selección abreviada subasta inversa",
          "etiqueta": "Selección abreviada subasta inversa",
          "coeficiente": 5.736228288595065,
          "frecuencia": 0.15431283037001442,
          "n": 2569,
          "en_formulario": true
        },
        {
          "valor": "Otra (pocos casos)",
          "etiqueta": "Otra (pocos casos)",
          "coeficiente": 3.9263416729700693,
          "frecuencia": 0.0016818837097549255,
          "n": 28,
          "en_formulario": false
        }
      ],
      "importancia": 6.217605216899195
    },
    {
      "nombre": "tipo_contrato",
      "etiqueta": "Tipo de contrato",
      "etiqueta_corta": "Tipo de contrato",
      "grupo": "caso",
      "ayuda": "",
      "tipo": "categoria",
      "mas_frecuente": "Prestación de servicios",
      "categorias": [
        {
          "valor": "Compraventa",
          "etiqueta": "Compraventa",
          "coeficiente": -3.430725257625413,
          "frecuencia": 0.2688010571840461,
          "n": 4475,
          "en_formulario": true
        },
        {
          "valor": "Consultoría",
          "etiqueta": "Consultoría",
          "coeficiente": 8.35007586716362,
          "frecuencia": 0.08055021624219126,
          "n": 1341,
          "en_formulario": true
        },
        {
          "valor": "Interventoría",
          "etiqueta": "Interventoría",
          "coeficiente": -3.7507086449171796,
          "frecuencia": 0.1391158097068717,
          "n": 2316,
          "en_formulario": true
        },
        {
          "valor": "Obra",
          "etiqueta": "Obra",
          "coeficiente": -2.77575149664264,
          "frecuencia": 0.030033637674195098,
          "n": 500,
          "en_formulario": true
        },
        {
          "valor": "Otro",
          "etiqueta": "Otro",
          "coeficiente": 0.23262437069728115,
          "frecuencia": 0.02438731379144642,
          "n": 406,
          "en_formulario": true
        },
        {
          "valor": "Prestación de servicios",
          "etiqueta": "Prestación de servicios",
          "coeficiente": 4.5233380466102275,
          "frecuencia": 0.35085295530994715,
          "n": 5841,
          "en_formulario": true
        },
        {
          "valor": "Suministros",
          "etiqueta": "Suministros",
          "coeficiente": -3.9114425198918297,
          "frecuencia": 0.10205430081691494,
          "n": 1699,
          "en_formulario": true
        },
        {
          "valor": "Otra (pocos casos)",
          "etiqueta": "Otra (pocos casos)",
          "coeficiente": 0.762589634245359,
          "frecuencia": 0.004204709274387314,
          "n": 70,
          "en_formulario": false
        }
      ],
      "importancia": 4.238020409876563
    },
    {
      "nombre": "orden_entidad",
      "etiqueta": "Orden de la entidad",
      "etiqueta_corta": "Orden de la entidad",
      "grupo": "caso",
      "ayuda": "",
      "tipo": "categoria",
      "mas_frecuente": "Territorial",
      "categorias": [
        {
          "valor": "Corporación Autónoma",
          "etiqueta": "Corporación Autónoma",
          "coeficiente": 8.994867075986864,
          "frecuencia": 0.017299375300336376,
          "n": 288,
          "en_formulario": true
        },
        {
          "valor": "Nacional",
          "etiqueta": "Nacional",
          "coeficiente": -8.070593026640703,
          "frecuencia": 0.4072561268620855,
          "n": 6780,
          "en_formulario": true
        },
        {
          "valor": "Territorial",
          "etiqueta": "Territorial",
          "coeficiente": -0.9242740521770046,
          "frecuencia": 0.5754444978375781,
          "n": 9580,
          "en_formulario": true
        }
      ],
      "importancia": 3.6050762702658647
    },
    {
      "nombre": "departamento",
      "etiqueta": "Departamento de la entidad",
      "etiqueta_corta": "Departamento de la entidad",
      "grupo": "caso",
      "ayuda": "",
      "tipo": "categoria",
      "mas_frecuente": "Distrito Capital de Bogotá",
      "categorias": [
        {
          "valor": "Amazonas",
          "etiqueta": "Amazonas",
          "coeficiente": 18.852606980001124,
          "frecuencia": 0.005706391158097068,
          "n": 95,
          "en_formulario": true
        },
        {
          "valor": "Antioquia",
          "etiqueta": "Antioquia",
          "coeficiente": -6.490323804313503,
          "frecuencia": 0.10301537722248919,
          "n": 1715,
          "en_formulario": true
        },
        {
          "valor": "Arauca",
          "etiqueta": "Arauca",
          "coeficiente": 24.660470129880178,
          "frecuencia": 0.009550696780394042,
          "n": 159,
          "en_formulario": true
        },
        {
          "valor": "Atlántico",
          "etiqueta": "Atlántico",
          "coeficiente": -10.591795141344697,
          "frecuencia": 0.012974531475252283,
          "n": 216,
          "en_formulario": true
        },
        {
          "valor": "Bolívar",
          "etiqueta": "Bolívar",
          "coeficiente": -14.234773649574679,
          "frecuencia": 0.0153171552138395,
          "n": 255,
          "en_formulario": true
        },
        {
          "valor": "Boyacá",
          "etiqueta": "Boyacá",
          "coeficiente": 9.764166719572094,
          "frecuencia": 0.0576045170591062,
          "n": 959,
          "en_formulario": true
        },
        {
          "valor": "Caldas",
          "etiqueta": "Caldas",
          "coeficiente": -12.310206991235075,
          "frecuencia": 0.03423834694858241,
          "n": 570,
          "en_formulario": true
        },
        {
          "valor": "Caquetá",
          "etiqueta": "Caquetá",
          "coeficiente": 24.214215344016072,
          "frecuencia": 0.010331571359923113,
          "n": 172,
          "en_formulario": true
        },
        {
          "valor": "Casanare",
          "etiqueta": "Casanare",
          "coeficiente": 20.122933598366973,
          "frecuencia": 0.015737626141278233,
          "n": 262,
          "en_formulario": true
        },
        {
          "valor": "Cauca",
          "etiqueta": "Cauca",
          "coeficiente": -12.562152167366056,
          "frecuencia": 0.01826045170591062,
          "n": 304,
          "en_formulario": true
        },
        {
          "valor": "Cesar",
          "etiqueta": "Cesar",
          "coeficiente": 16.60522510437519,
          "frecuencia": 0.009911100432484382,
          "n": 165,
          "en_formulario": true
        },
        {
          "valor": "Cundinamarca",
          "etiqueta": "Cundinamarca",
          "coeficiente": -6.407554716756139,
          "frecuencia": 0.05838539163863527,
          "n": 972,
          "en_formulario": true
        },
        {
          "valor": "Córdoba",
          "etiqueta": "Córdoba",
          "coeficiente": -9.723808785620015,
          "frecuencia": 0.008769822200864969,
          "n": 146,
          "en_formulario": true
        },
        {
          "valor": "Distrito Capital de Bogotá",
          "etiqueta": "Distrito Capital de Bogotá",
          "coeficiente": -16.89112313870199,
          "frecuencia": 0.35553820278712156,
          "n": 5919,
          "en_formulario": true
        },
        {
          "valor": "Huila",
          "etiqueta": "Huila",
          "coeficiente": -0.3756600441747298,
          "frecuencia": 0.024927919269581933,
          "n": 415,
          "en_formulario": true
        },
        {
          "valor": "La Guajira",
          "etiqueta": "La Guajira",
          "coeficiente": 17.290483018279808,
          "frecuencia": 0.005045651129264777,
          "n": 84,
          "en_formulario": true
        },
        {
          "valor": "Magdalena",
          "etiqueta": "Magdalena",
          "coeficiente": -12.51341843506743,
          "frecuencia": 0.006427198462277751,
          "n": 107,
          "en_formulario": true
        },
        {
          "valor": "Meta",
          "etiqueta": "Meta",
          "coeficiente": 9.896667633189212,
          "frecuencia": 0.01874098990869774,
          "n": 312,
          "en_formulario": true
        },
        {
          "valor": "Nariño",
          "etiqueta": "Nariño",
          "coeficiente": -22.259247417459484,
          "frecuencia": 0.014776549735703989,
          "n": 246,
          "en_formulario": true
        },
        {
          "valor": "Norte de Santander",
          "etiqueta": "Norte de Santander",
          "coeficiente": 12.876123239188196,
          "frecuencia": 0.024807784718885152,
          "n": 413,
          "en_formulario": true
        },
        {
          "valor": "Putumayo",
          "etiqueta": "Putumayo",
          "coeficiente": 10.572329792923613,
          "frecuencia": 0.008709754925516578,
          "n": 145,
          "en_formulario": true
        },
        {
          "valor": "Quindío",
          "etiqueta": "Quindío",
          "coeficiente": -7.466955318459133,
          "frecuencia": 0.009430562229697261,
          "n": 157,
          "en_formulario": true
        },
        {
          "valor": "Risaralda",
          "etiqueta": "Risaralda",
          "coeficiente": -13.566480749972484,
          "frecuencia": 0.01765977895242672,
          "n": 294,
          "en_formulario": true
        },
        {
          "valor": "Santander",
          "etiqueta": "Santander",
          "coeficiente": -3.5789236963121476,
          "frecuencia": 0.03357760691975012,
          "n": 559,
          "en_formulario": true
        },
        {
          "valor": "Sucre",
          "etiqueta": "Sucre",
          "coeficiente": -3.266010401860383,
          "frecuencia": 0.0061268620855358,
          "n": 102,
          "en_formulario": true
        },
        {
          "valor": "Tolima",
          "etiqueta": "Tolima",
          "coeficiente": 1.7930009933622268,
          "frecuencia": 0.03099471407976934,
          "n": 516,
          "en_formulario": true
        },
        {
          "valor": "Valle del Cauca",
          "etiqueta": "Valle del Cauca",
          "coeficiente": -4.5900917084854616,
          "frecuencia": 0.05682364247957713,
          "n": 946,
          "en_formulario": true
        },
        {
          "valor": "Sin información",
          "etiqueta": "Sin información",
          "coeficiente": -3.683927314410059,
          "frecuencia": 0.017239308024987986,
          "n": 287,
          "en_formulario": true
        },
        {
          "valor": "Otra (pocos casos)",
          "etiqueta": "Otra (pocos casos)",
          "coeficiente": -6.135769072966369,
          "frecuencia": 0.00937049495434887,
          "n": 156,
          "en_formulario": true
        }
      ],
      "importancia": 8.764779052653248
    },
    {
      "nombre": "familia_unspsc",
      "etiqueta": "Familia UNSPSC del código principal",
      "etiqueta_corta": "Familia UNSPSC del código principal",
      "grupo": "caso",
      "ayuda": "",
      "tipo": "categoria",
      "mas_frecuente": "UNSPSC 8110",
      "categorias": [
        {
          "valor": "UNSPSC 4319",
          "etiqueta": "UNSPSC 4319",
          "coeficiente": 0.4496238151554067,
          "frecuencia": 0.012013455069678039,
          "n": 200,
          "en_formulario": true
        },
        {
          "valor": "UNSPSC 4320",
          "etiqueta": "UNSPSC 4320",
          "coeficiente": -9.403317173218342,
          "frecuencia": 0.025468524747717443,
          "n": 424,
          "en_formulario": true
        },
        {
          "valor": "UNSPSC 4321",
          "etiqueta": "UNSPSC 4321",
          "coeficiente": -12.612413448938016,
          "frecuencia": 0.12710235463719366,
          "n": 2116,
          "en_formulario": true
        },
        {
          "valor": "UNSPSC 4322",
          "etiqueta": "UNSPSC 4322",
          "coeficiente": -2.6050895023158565,
          "frecuencia": 0.0392239308024988,
          "n": 653,
          "en_formulario": true
        },
        {
          "valor": "UNSPSC 4323",
          "etiqueta": "UNSPSC 4323",
          "coeficiente": 5.44418288346041,
          "frecuencia": 0.12409899086977415,
          "n": 2066,
          "en_formulario": true
        },
        {
          "valor": "UNSPSC 8110",
          "etiqueta": "UNSPSC 8110",
          "coeficiente": -4.2784365266312525,
          "frecuencia": 0.29631186929360886,
          "n": 4933,
          "en_formulario": true
        },
        {
          "valor": "UNSPSC 8111",
          "etiqueta": "UNSPSC 8111",
          "coeficiente": 2.0260353173520005,
          "frecuencia": 0.22194858241230178,
          "n": 3695,
          "en_formulario": true
        },
        {
          "valor": "UNSPSC 8114",
          "etiqueta": "UNSPSC 8114",
          "coeficiente": 5.144230717144808,
          "frecuencia": 0.12079529072561268,
          "n": 2011,
          "en_formulario": true
        },
        {
          "valor": "UNSPSC 8115",
          "etiqueta": "UNSPSC 8115",
          "coeficiente": 0.4408547797760885,
          "frecuencia": 0.009550696780394042,
          "n": 159,
          "en_formulario": true
        },
        {
          "valor": "UNSPSC 8116",
          "etiqueta": "UNSPSC 8116",
          "coeficiente": 13.123576465742056,
          "frecuencia": 0.01771984622777511,
          "n": 295,
          "en_formulario": true
        },
        {
          "valor": "Otra (pocos casos)",
          "etiqueta": "Otra (pocos casos)",
          "coeficiente": 2.2707526726727054,
          "frecuencia": 0.005766458433445459,
          "n": 96,
          "en_formulario": true
        }
      ],
      "importancia": 5.246664978606454
    },
    {
      "nombre": "precio_millones",
      "etiqueta": "Precio base (millones de pesos)",
      "etiqueta_corta": "Precio base (millones de pesos)",
      "grupo": "caso",
      "ayuda": "Elige el rango.",
      "tipo": "categoria",
      "mas_frecuente": "17,10 a 35,80",
      "categorias": [
        {
          "valor": "hasta 17,10",
          "etiqueta": "hasta 17,10",
          "coeficiente": 1.9885718793936236,
          "frecuencia": 0.2003844305622297,
          "n": 3336,
          "en_formulario": true
        },
        {
          "valor": "17,10 a 35,80",
          "etiqueta": "17,10 a 35,80",
          "coeficiente": -1.358284457719285,
          "frecuencia": 0.20050456511292647,
          "n": 3338,
          "en_formulario": true
        },
        {
          "valor": "35,80 a 74,00",
          "etiqueta": "35,80 a 74,00",
          "coeficiente": -2.6215335738356242,
          "frecuencia": 0.1991230177799135,
          "n": 3315,
          "en_formulario": true
        },
        {
          "valor": "74,00 a 279,98",
          "etiqueta": "74,00 a 279,98",
          "coeficiente": -6.066171417543112,
          "frecuencia": 0.199663623258049,
          "n": 3324,
          "en_formulario": true
        },
        {
          "valor": "más de 279,98",
          "etiqueta": "más de 279,98",
          "coeficiente": -11.99339090920138,
          "frecuencia": 0.19996395963479097,
          "n": 3329,
          "en_formulario": true
        },
        {
          "valor": "Sin información",
          "etiqueta": "Sin información",
          "coeficiente": 20.05080847884848,
          "frecuencia": 0.00036040365209034117,
          "n": 6,
          "en_formulario": false
        }
      ],
      "importancia": 3.9724777977867953
    },
    {
      "nombre": "duracion_dias",
      "etiqueta": "Duración del contrato (días)",
      "etiqueta_corta": "Duración del contrato (días)",
      "grupo": "caso",
      "ayuda": "Elige el rango.",
      "tipo": "categoria",
      "mas_frecuente": "hasta 20",
      "categorias": [
        {
          "valor": "hasta 20",
          "etiqueta": "hasta 20",
          "coeficiente": 1.7124671598562928,
          "frecuencia": 0.1911340701585776,
          "n": 3182,
          "en_formulario": true
        },
        {
          "valor": "20 a 45",
          "etiqueta": "20 a 45",
          "coeficiente": -2.502387794939621,
          "frecuencia": 0.173954829408938,
          "n": 2896,
          "en_formulario": true
        },
        {
          "valor": "45 a 90",
          "etiqueta": "45 a 90",
          "coeficiente": -0.21387890557874364,
          "frecuencia": 0.19047333012974532,
          "n": 3171,
          "en_formulario": true
        },
        {
          "valor": "90 a 180",
          "etiqueta": "90 a 180",
          "coeficiente": 0.05616932353625587,
          "frecuencia": 0.13869533877943296,
          "n": 2309,
          "en_formulario": true
        },
        {
          "valor": "más de 180",
          "etiqueta": "más de 180",
          "coeficiente": -0.12740443253261882,
          "frecuencia": 0.16656655454108601,
          "n": 2773,
          "en_formulario": true
        },
        {
          "valor": "Sin información",
          "etiqueta": "Sin información",
          "coeficiente": 1.0750346500479564,
          "frecuencia": 0.1391758769822201,
          "n": 2317,
          "en_formulario": true
        }
      ],
      "importancia": 0.9763074595524643
    },
    {
      "nombre": "mes",
      "etiqueta": "Mes de publicación",
      "etiqueta_corta": "Mes de publicación",
      "grupo": "caso",
      "ayuda": "",
      "tipo": "categoria",
      "mas_frecuente": "Noviembre",
      "categorias": [
        {
          "valor": "Enero",
          "etiqueta": "Enero",
          "coeficiente": 2.180486046353938,
          "frecuencia": 0.0122537241710716,
          "n": 204,
          "en_formulario": true
        },
        {
          "valor": "Febrero",
          "etiqueta": "Febrero",
          "coeficiente": -3.8013602031047533,
          "frecuencia": 0.03844305622296973,
          "n": 640,
          "en_formulario": true
        },
        {
          "valor": "Marzo",
          "etiqueta": "Marzo",
          "coeficiente": -4.286036949254654,
          "frecuencia": 0.061869293608841906,
          "n": 1030,
          "en_formulario": true
        },
        {
          "valor": "Abril",
          "etiqueta": "Abril",
          "coeficiente": -3.3401637039398837,
          "frecuencia": 0.06607400288322922,
          "n": 1100,
          "en_formulario": true
        },
        {
          "valor": "Mayo",
          "etiqueta": "Mayo",
          "coeficiente": -2.382774619564546,
          "frecuencia": 0.0864368092263335,
          "n": 1439,
          "en_formulario": true
        },
        {
          "valor": "Junio",
          "etiqueta": "Junio",
          "coeficiente": -1.8368922347805856,
          "frecuencia": 0.0802498798654493,
          "n": 1336,
          "en_formulario": true
        },
        {
          "valor": "Julio",
          "etiqueta": "Julio",
          "coeficiente": -2.951326216707318,
          "frecuencia": 0.08907976934166266,
          "n": 1483,
          "en_formulario": true
        },
        {
          "valor": "Agosto",
          "etiqueta": "Agosto",
          "coeficiente": -1.6186466637953798,
          "frecuencia": 0.08763815473330129,
          "n": 1459,
          "en_formulario": true
        },
        {
          "valor": "Septiembre",
          "etiqueta": "Septiembre",
          "coeficiente": -0.11854468932463579,
          "frecuencia": 0.10157376261412783,
          "n": 1691,
          "en_formulario": true
        },
        {
          "valor": "Octubre",
          "etiqueta": "Octubre",
          "coeficiente": 2.1007732818029807,
          "frecuencia": 0.12638154733301296,
          "n": 2104,
          "en_formulario": true
        },
        {
          "valor": "Noviembre",
          "etiqueta": "Noviembre",
          "coeficiente": 7.031552041859807,
          "frecuencia": 0.14878664103796252,
          "n": 2477,
          "en_formulario": true
        },
        {
          "valor": "Diciembre",
          "etiqueta": "Diciembre",
          "coeficiente": 9.022933910543676,
          "frecuencia": 0.10121335896203748,
          "n": 1685,
          "en_formulario": true
        }
      ],
      "importancia": 3.8833300253576164
    },
    {
      "nombre": "dia_semana",
      "etiqueta": "Día de la semana de publicación",
      "etiqueta_corta": "Día de la semana de publicación",
      "grupo": "caso",
      "ayuda": "",
      "tipo": "categoria",
      "mas_frecuente": "Martes",
      "categorias": [
        {
          "valor": "Lunes",
          "etiqueta": "Lunes",
          "coeficiente": 2.6464209928671085,
          "frecuencia": 0.17918068236424795,
          "n": 2983,
          "en_formulario": true
        },
        {
          "valor": "Martes",
          "etiqueta": "Martes",
          "coeficiente": 1.5738677816732114,
          "frecuencia": 0.2323402210475733,
          "n": 3868,
          "en_formulario": true
        },
        {
          "valor": "Miércoles",
          "etiqueta": "Miércoles",
          "coeficiente": 1.239649290086343,
          "frecuencia": 0.21161701105237865,
          "n": 3523,
          "en_formulario": true
        },
        {
          "valor": "Jueves",
          "etiqueta": "Jueves",
          "coeficiente": -1.1888587284872523,
          "frecuencia": 0.19185487746275828,
          "n": 3194,
          "en_formulario": true
        },
        {
          "valor": "Viernes",
          "etiqueta": "Viernes",
          "coeficiente": -2.010912431575714,
          "frecuencia": 0.17539644401729937,
          "n": 2920,
          "en_formulario": true
        },
        {
          "valor": "Sábado",
          "etiqueta": "Sábado",
          "coeficiente": -2.111293224632761,
          "frecuencia": 0.0064872657376261415,
          "n": 108,
          "en_formulario": true
        },
        {
          "valor": "Otra (pocos casos)",
          "etiqueta": "Otra (pocos casos)",
          "coeficiente": -0.14887368000153364,
          "frecuencia": 0.0031234983181162904,
          "n": 52,
          "en_formulario": false
        }
      ],
      "importancia": 1.5533916737278897
    }
  ],
  "excluidas": [],
  "casos_prueba": [
    {
      "id": 1,
      "entradas": {
        "modalidad": "Mínima cuantía",
        "tipo_contrato": "Prestación de servicios",
        "orden_entidad": "Nacional",
        "departamento": "Nariño",
        "familia_unspsc": "UNSPSC 8110",
        "precio_millones": "35,80 a 74,00",
        "duracion_dias": "Sin información",
        "mes": "Abril",
        "dia_semana": "Jueves"
      },
      "puntaje_real": 100.0,
      "prediccion_sklearn": 6.314234998452299
    },
    {
      "id": 2,
      "entradas": {
        "modalidad": "Mínima cuantía",
        "tipo_contrato": "Compraventa",
        "orden_entidad": "Territorial",
        "departamento": "Distrito Capital de Bogotá",
        "familia_unspsc": "UNSPSC 8111",
        "precio_millones": "17,10 a 35,80",
        "duracion_dias": "más de 180",
        "mes": "Junio",
        "dia_semana": "Martes"
      },
      "puntaje_real": 0.0,
      "prediccion_sklearn": 21.505894804276636
    },
    {
      "id": 3,
      "entradas": {
        "modalidad": "Concurso de méritos abierto",
        "tipo_contrato": "Consultoría",
        "orden_entidad": "Nacional",
        "departamento": "Otra (pocos casos)",
        "familia_unspsc": "UNSPSC 8110",
        "precio_millones": "74,00 a 279,98",
        "duracion_dias": "20 a 45",
        "mes": "Noviembre",
        "dia_semana": "Jueves"
      },
      "puntaje_real": 100.0,
      "prediccion_sklearn": 31.560505366927394
    },
    {
      "id": 4,
      "entradas": {
        "modalidad": "Mínima cuantía",
        "tipo_contrato": "Prestación de servicios",
        "orden_entidad": "Territorial",
        "departamento": "Antioquia",
        "familia_unspsc": "UNSPSC 4323",
        "precio_millones": "17,10 a 35,80",
        "duracion_dias": "20 a 45",
        "mes": "Octubre",
        "dia_semana": "Jueves"
      },
      "puntaje_real": 0.0,
      "prediccion_sklearn": 42.07886065302528
    },
    {
      "id": 5,
      "entradas": {
        "modalidad": "Mínima cuantía",
        "tipo_contrato": "Prestación de servicios",
        "orden_entidad": "Territorial",
        "departamento": "Norte de Santander",
        "familia_unspsc": "UNSPSC 8114",
        "precio_millones": "74,00 a 279,98",
        "duracion_dias": "Sin información",
        "mes": "Octubre",
        "dia_semana": "Martes"
      },
      "puntaje_real": 0.0,
      "prediccion_sklearn": 62.77761752553559
    }
  ],
  "textos": {
    "titulo": "Riesgo de oferente único en SECOP II",
    "subtitulo": "Machine Learning 1 · Universidad EAN",
    "pregunta": "¿Qué tan probable es que un proceso TIC termine con un solo oferente?",
    "aviso_etico": "Una probabilidad alta no significa que convenga participar: puede indicar requisitos hechos a la medida, así que revise el pliego antes de decidir. El modelo muestra asociaciones, no causas. El departamento refleja diferencias históricas del mercado en cada región, no la conducta de sus entidades.",
    "etiqueta_promedio": "Promedio de los datos",
    "subetiqueta_medidor": "% de probabilidad",
    "autor": "Milton Andrés Tovar Bonilla",
    "autor_url": "https://github.com/miltontovar",
    "grupos": {
      "caso": "Datos del caso"
    }
  },
  "intercepto": 56.88996255134484
};
