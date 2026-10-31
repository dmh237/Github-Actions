// Configuración de commitlint para validar mensajes de commit
// siguiendo la especificación de Conventional Commits.
// Reglas documentadas en: https://commitlint.js.org/#/reference-rules
module.exports = {
  rules: {
    // ---------------------------------------------------------------
    // Tipo de commit
    // Debe ser uno de los valores permitidos y estar en minúscula.
    // ---------------------------------------------------------------
    'type-enum': [
      2,          // Nivel: 2 = error
      'always',   // Aplicación: siempre debe cumplirse
      [           // Lista de tipos permitidos
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
      ],
    ],

    // El tipo debe estar en minúscula
    'type-case': [2, 'always', 'lower-case'],

    // El tipo no puede estar vacío
    'type-empty': [2, 'never'],

    // ---------------------------------------------------------------
    // Ámbito (scope)
    // Es opcional. Si se usa, debe ir en minúscula.
    // ---------------------------------------------------------------
    'scope-case': [2, 'always', 'lower-case'],

    // ---------------------------------------------------------------
    // Descripción (subject)
    // Debe estar en minúscula, no puede estar vacía y no debe terminar
    // con punto final.
    // ---------------------------------------------------------------
    'subject-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],

    // ---------------------------------------------------------------
    // Longitud máxima de la línea del encabezado (tipo + ámbito + descripción)
    // ---------------------------------------------------------------
    'header-max-length': [2, 'always', 100],
  },
};
