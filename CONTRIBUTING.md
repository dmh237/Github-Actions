# Guía de contribución

Este proyecto sigue la convención de **Conventional Commits** para mantener un historial de cambios claro, legible y apto para generar automáticamente changelogs.

## Formato del mensaje de commit

```text
tipo(ámbito opcional): descripción en minúscula
```

- **tipo**: obligatorio. Indica la naturaleza del cambio.
- **ámbito**: opcional. Describe la parte del proyecto afectada (por ejemplo, `auth`, `api`, `ui`).
- **descripción**: obligatoria. Breve resumen del cambio en minúscula y sin punto final.

## Tipos permitidos

| Tipo       | Uso                                                              |
| ---------- | ---------------------------------------------------------------- |
| `feat`     | Nueva funcionalidad.                                             |
| `fix`      | Corrección de un error.                                          |
| `docs`     | Cambios solo en documentación.                                   |
| `style`    | Cambios que no afectan la lógica (formato, espacios, punto y coma). |
| `refactor` | Refactorización del código sin cambiar comportamiento.           |
| `perf`     | Mejora de rendimiento.                                           |
| `test`     | Adición o modificación de pruebas.                               |
| `build`    | Cambios en el sistema de build o dependencias externas.          |
| `ci`       | Cambios en la configuración de integración continua.             |
| `chore`    | Tareas menores que no encajan en otra categoría.                 |
| `revert`   | Revertir un commit anterior.                                     |

## Ejemplos válidos

```text
feat(auth): agregar inicio de sesión con Google
```

```text
fix(api): corregir error al procesar fechas nulas
```

```text
docs: actualizar guía de instalación
```

## Reglas rápidas

1. Escribe la descripción en **minúscula**.
2. **No termines** la descripción con punto final.
3. Si usas ámbito, también debe ir en **minúscula**.
4. El encabezado completo no debe superar los **100 caracteres**.
5. La validación se ejecuta automáticamente en cada `push` y `pull_request` a `main`.
