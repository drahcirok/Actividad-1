# Dashboard de Emergencias Médicas

## Rediseño de Salidas Efectivas

**Asignatura:** Desarrollo de Sistemas de Información

**Autor:** Richard Burgos

---

# Tabla de Contenidos

1. Introducción
2. Objetivos
3. Contexto del Caso
4. Análisis del Sistema Actual
5. Selección Tecnológica
6. Fundamentación Teórica
7. Diseño Propuesto
8. Evidencias del Diseño
9. Tecnologías Utilizadas
10. Estructura del Proyecto
11. Ejecución del Proyecto
12. Conclusiones

---

# Introducción

Los sistemas de información tienen como propósito transformar datos en información útil que facilite la toma de decisiones. Sin embargo, para que esta información cumpla su objetivo, no basta con que sea correcta; también debe presentarse de manera clara, organizada y comprensible para el usuario que la recibe. Un diseño inadecuado de las salidas puede dificultar la interpretación de los datos, incrementar el tiempo de respuesta y aumentar la probabilidad de cometer errores durante la toma de decisiones.

En el ámbito hospitalario, la forma en que se presenta la información adquiere una importancia aún mayor debido a que el personal médico trabaja en entornos donde el tiempo es un recurso crítico. La identificación rápida de pacientes en estado grave, la disponibilidad de camas y la asignación de recursos son actividades que requieren información actualizada y fácilmente interpretable.

El presente proyecto desarrolla el rediseño del sistema de reportes de la sala de emergencias de la Clínica San José. A partir del análisis del reporte heredado proporcionado en el caso de estudio, se propone un Dashboard interactivo que organiza la información mediante indicadores visuales, tablas estructuradas y mecanismos de clasificación que permiten obtener una visión general del estado del servicio en pocos segundos.

La propuesta se fundamenta en los principios del Diseño de Salidas Efectivas, incorporando criterios de usabilidad, organización de la información, jerarquía visual y diseño de interfaces con el propósito de mejorar la experiencia del usuario y apoyar el proceso de toma de decisiones.

---

# Objetivos

## Objetivo General

Diseñar un Dashboard digital para la sala de emergencias de la Clínica San José que sustituya el reporte textual del sistema heredado, mejorando la organización, visualización e interpretación de la información clínica necesaria para la toma de decisiones.

## Objetivos Específicos

* Analizar las principales deficiencias presentes en el reporte generado por el sistema heredado.
* Aplicar el Modelo Conceptual de Diseño de Salidas considerando los componentes de Información, Presentación y Contexto.
* Incorporar principios de diseño de interfaces que mejoren la legibilidad y usabilidad del sistema.
* Organizar la información mediante indicadores visuales que permitan identificar rápidamente el estado de los pacientes y la disponibilidad de recursos hospitalarios.
* Diseñar una interfaz moderna orientada a facilitar la supervisión de la sala de emergencias por parte del Director Médico.

---

# Contexto del Caso

La Clínica San José enfrenta problemas relacionados con la saturación de su sala de emergencias. El Director Médico necesita supervisar continuamente el estado de los pacientes, la ocupación de camas, la disponibilidad del personal médico y la necesidad de realizar traslados hacia unidades de mayor complejidad.

El sistema utilizado actualmente genera un reporte en formato de texto plano que contiene todos los registros clínicos en una única pantalla. Aunque la información es completa, su organización dificulta la identificación rápida de pacientes críticos y limita la capacidad del Director Médico para obtener una visión general del estado operativo del servicio.

Con base en esta problemática, se plantea el desarrollo de un Dashboard que reorganice la información mediante componentes visuales capaces de presentar los datos de forma clara, priorizada y comprensible.

---

# Análisis del Sistema Actual

## Deficiencias Identificadas

| Problema identificado                                | Impacto generado                         | Consecuencia                                       |
| ---------------------------------------------------- | ---------------------------------------- | -------------------------------------------------- |
| Información presentada como texto continuo           | Incremento de la carga cognitiva         | Mayor tiempo para localizar información relevante  |
| Ausencia de jerarquía visual                         | Baja facilidad de lectura                | Dificultad para identificar pacientes prioritarios |
| Recursos hospitalarios ubicados al final del reporte | Escasa visibilidad del estado operativo  | Retraso en la toma de decisiones                   |
| Información sin clasificación ni filtros             | Búsqueda completamente manual            | Disminución de la eficiencia del usuario           |
| Falta de indicadores resumidos                       | No existe una visión global del servicio | Mayor dependencia de la lectura detallada          |

## Deficiencia 1. Sobrecarga de información

El sistema presenta todos los registros en un único bloque de texto, obligando al usuario a revisar cada línea para identificar pacientes prioritarios. Esta forma de presentar la información incrementa la carga cognitiva y dificulta la identificación inmediata de situaciones críticas.

## Deficiencia 2. Falta de jerarquía visual

Todos los elementos del reporte poseen el mismo peso visual, sin utilizar colores, tamaños tipográficos o agrupaciones que permitan diferenciar la información según su importancia. Como resultado, los pacientes críticos no destacan sobre el resto de registros.

## Deficiencia 3. Organización poco orientada a la toma de decisiones

Los datos relacionados con la disponibilidad de camas y personal médico aparecen al final del reporte, mezclados con la información clínica. Esto dificulta obtener una visión rápida del estado operativo del servicio y retrasa la asignación de recursos.

---

# Selección Tecnológica

## ¿Quién recibirá la información?

El sistema está dirigido al Director Médico de la Clínica San José, responsable de supervisar el funcionamiento de la sala de emergencias y coordinar la distribución de recursos humanos y materiales. Debido a sus funciones, requiere una interfaz que presente información resumida y organizada por niveles de prioridad.

## ¿Cómo accederá a ella?

El Dashboard está diseñado para utilizarse desde equipos de escritorio o dispositivos móviles institucionales conectados a la red hospitalaria. La interfaz responsive permite mantener una adecuada visualización independientemente del tamaño de la pantalla.

## ¿Con qué rapidez se requiere?

La información debe actualizarse de forma continua debido a que el estado de los pacientes y la disponibilidad de recursos cambian constantemente. Una actualización oportuna permite reducir tiempos de respuesta y mejorar la coordinación del servicio.

## ¿Qué nivel de interacción requiere?

La solución incorpora mecanismos de interacción que permiten filtrar pacientes por nivel de gravedad, realizar búsquedas, ordenar registros por prioridad y visualizar información detallada cuando sea necesario. Estas funcionalidades contribuyen a optimizar el proceso de supervisión y seguimiento de pacientes.

---

# Fundamentación Teórica

## Modelo Conceptual

### Información

La propuesta prioriza la información necesaria para la toma de decisiones inmediatas. En lugar de mostrar comentarios clínicos extensos en todos los registros, se destacan indicadores relacionados con el número de pacientes, su nivel de gravedad, la disponibilidad de camas, el personal médico disponible y los pacientes que requieren traslado a la Unidad de Cuidados Intensivos.

Esta organización permite disminuir la cantidad de información que el usuario debe procesar antes de identificar una situación crítica.

### Presentación

La información se presenta mediante una estructura organizada en diferentes niveles. En la parte superior del Dashboard se incluyen indicadores clave de desempeño (KPIs) que resumen el estado general del servicio. Posteriormente se muestran las alertas prioritarias y finalmente una tabla con el detalle completo de los pacientes.

La utilización de códigos de color facilita la identificación del nivel de gravedad de cada paciente.

| Estado   | Color    |
| -------- | -------- |
| Leve     | Verde    |
| Moderado | Amarillo |
| Grave    | Naranja  |
| Crítico  | Rojo     |

Esta clasificación permite reconocer visualmente las prioridades sin necesidad de realizar una lectura completa del contenido.

### Contexto

El Dashboard ha sido diseñado considerando que será utilizado en un entorno hospitalario caracterizado por la necesidad de tomar decisiones rápidas y precisas. La organización de la información responde a este contexto, priorizando aquellos elementos que influyen directamente en la gestión de pacientes y recursos hospitalarios.

---

## Principios de Diseño de Interfaces Aplicados

### Jerarquía Visual

La interfaz organiza los componentes de acuerdo con su nivel de importancia. Los indicadores principales se ubican en la parte superior, seguidos por las alertas críticas y posteriormente por el detalle de los pacientes. Esta distribución permite que el usuario identifique primero la información más relevante.

### Simplicidad

Se eliminaron elementos redundantes presentes en el reporte original y se resumieron los comentarios clínicos cuando fue posible. La reducción de información innecesaria favorece una interpretación más rápida y disminuye la carga cognitiva del usuario.

### Consistencia

Todos los componentes mantienen una estructura visual uniforme utilizando la misma tipografía, colores, distribución y estilos gráficos. Esta consistencia facilita el aprendizaje del sistema y mejora la experiencia de uso.

### Accesibilidad

La propuesta considera el uso de contrastes adecuados, tamaños de fuente legibles y códigos de color acompañados por etiquetas textuales. Estas decisiones permiten que la información pueda ser interpretada con mayor facilidad por diferentes tipos de usuarios.

---

# Diseño Propuesto

El Dashboard organiza la información siguiendo un flujo de lectura que facilita la interpretación rápida del estado general de la sala de emergencias.

La interfaz está compuesta por cuatro secciones principales:

* Indicadores generales del servicio.
* Estado de los recursos hospitalarios.
* Alertas correspondientes a pacientes críticos.
* Tabla detallada con la información de todos los pacientes.

## Indicadores Principales

| Indicador           | Valor |
| ------------------- | ----: |
| Total de pacientes  |    12 |
| Pacientes críticos  |     4 |
| Pacientes graves    |     3 |
| Pacientes moderados |     2 |
| Pacientes leves     |     3 |

## Estado de Recursos

| Recurso              | Disponibilidad |
| -------------------- | -------------: |
| Camas de observación |         0 / 10 |
| Camas críticas       |          0 / 3 |
| Camas UCI            |          1 / 8 |
| Médicos disponibles  |              1 |

## Pacientes Prioritarios

| Paciente     | Estado  | Acción sugerida                    |
| ------------ | ------- | ---------------------------------- |
| Carlos Gómez | Crítico | Traslado inmediato a UCI           |
| Sofía Mejía  | Crítico | Atención prioritaria               |
| Diana Loor   | Crítico | Evaluación inmediata               |
| Juan Pérez   | Grave   | Asignación prioritaria de recursos |

---

# Evidencias del Diseño

Las capturas del Dashboard se encuentran almacenadas en la carpeta **img** del proyecto.

* Vista general del Dashboard.
* Panel de alertas.
* Tabla de pacientes.
* Visualización responsive.

---

# Tecnologías Utilizadas

| Tecnología     | Finalidad                   |
| -------------- | --------------------------- |
| HTML5          | Estructura del sistema      |
| Tailwind CSS   | Diseño de la interfaz       |
| JavaScript ES6 | Funcionalidad e interacción |
| Heroicons      | Iconografía                 |
| Git            | Control de versiones        |
| GitHub         | Publicación del proyecto    |

---

# Estructura del Proyecto

```text
dashboard-emergencias/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── img/
│   ├── dashboard.png
│   ├── alertas.png
│   └── responsive.png
└── assets/
```

## Descripción de Archivos

| Archivo    | Descripción                             |
| ---------- | --------------------------------------- |
| index.html | Estructura principal del Dashboard      |
| style.css  | Hoja de estilos personalizada           |
| script.js  | Funciones de interacción                |
| README.md  | Documentación del proyecto              |
| img        | Capturas del diseño y recursos gráficos |

---

# Ejecución del Proyecto

1. Clonar el repositorio.

```bash
git clone https://github.com/usuario/dashboard-emergencias.git
```

2. Acceder al directorio del proyecto.

```bash
cd dashboard-emergencias
```

3. Abrir el archivo **index.html** en cualquier navegador web moderno.

El proyecto no requiere instalación de dependencias adicionales ni procesos de compilación.

---

# Conclusiones

El desarrollo de este proyecto permitió aplicar los conceptos estudiados en la asignatura **Desarrollo de Sistemas de Información**, particularmente aquellos relacionados con el diseño de salidas orientadas al usuario. El análisis del sistema heredado evidenció que una presentación inadecuada de la información puede afectar la rapidez con la que se interpretan los datos y, en consecuencia, influir en la calidad de las decisiones tomadas por los responsables del servicio.

La propuesta presentada reorganiza la información mediante indicadores visuales, tablas estructuradas y una distribución jerárquica de los elementos, favoreciendo una interpretación más clara del estado general de la sala de emergencias. Asimismo, la incorporación de códigos de color y componentes visuales permite identificar con mayor rapidez las situaciones que requieren atención prioritaria.

Finalmente, este trabajo pone de manifiesto la importancia del diseño de salidas dentro de los sistemas de información. Una adecuada presentación de los datos no solo mejora la experiencia del usuario, sino que también contribuye a que la información sea más útil, comprensible y oportuna para apoyar la toma de decisiones en contextos donde la rapidez y la precisión resultan fundamentales.
