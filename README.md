# Dashboard de Emergencias Médicas

## Rediseño de Salidas Efectivas

**Asignatura:** Desarrollo de Sistemas de Información  
**Autor:** Richard Burgos

---

## Tabla de Contenidos

- Introducción
- Objetivos
- Contexto del Caso
- Análisis del Sistema Actual
- Selección Tecnológica
- Fundamentación Teórica
- Diseño Propuesto
- Tecnologías Utilizadas
- Estructura del Proyecto
- Ejecución del Proyecto
- Conclusiones

---

# Introducción

El diseño de las salidas de un sistema de información desempeña un papel fundamental en la calidad de las decisiones que toman sus usuarios. En contextos donde la información debe interpretarse de forma rápida, como ocurre en los servicios hospitalarios de emergencia, una presentación inadecuada de los datos puede retrasar la respuesta ante situaciones críticas.

El presente proyecto propone el rediseño del sistema de reportes utilizado por la Clínica San José, reemplazando un reporte textual por un Dashboard interactivo que organiza la información mediante indicadores visuales, tablas estructuradas y elementos gráficos que facilitan la interpretación del estado general de la sala de emergencias.

El desarrollo de esta propuesta se fundamenta en los principios estudiados en la asignatura **Desarrollo de Sistemas de Información**, aplicando conceptos relacionados con el Diseño de Salidas Efectivas, la usabilidad y el diseño moderno de interfaces.

---

# Objetivos

## Objetivo General

Diseñar un Dashboard digital que permita visualizar de manera clara y organizada la información de la sala de emergencias de la Clínica San José, facilitando la toma de decisiones del Director Médico.

## Objetivos Específicos

- Analizar las deficiencias del sistema de reporte heredado.
- Aplicar el Modelo Conceptual de Diseño de Salidas.
- Implementar principios de diseño de interfaces orientados a la usabilidad.
- Organizar la información mediante indicadores visuales que mejoren su interpretación.
- Desarrollar una interfaz moderna que optimice la supervisión de pacientes y recursos hospitalarios.

---

# Contexto del Caso

La Clínica San José presenta una alta demanda de atención en su sala de emergencias. El Director Médico necesita supervisar continuamente el estado de los pacientes, la disponibilidad de camas, la ocupación del área crítica y la disponibilidad del personal médico para coordinar la asignación de recursos.

El sistema actual genera un reporte en texto plano que concentra toda la información en un único bloque de datos, dificultando la identificación inmediata de pacientes críticos y reduciendo la eficiencia durante la toma de decisiones.

Como solución se propone el desarrollo de un Dashboard que permita visualizar la información de forma resumida, organizada y jerarquizada.

---

# Análisis del Sistema Actual

## Deficiencias Identificadas

| Problema | Impacto | Consecuencia |
|----------|---------|--------------|
| Reporte completamente textual | Incrementa la carga cognitiva | Mayor tiempo para localizar información relevante |
| Ausencia de jerarquía visual | Baja legibilidad | Dificultad para identificar pacientes críticos |
| Información operativa dispersa | Baja eficiencia | Retraso en la asignación de recursos |

### Sobrecarga de información

El reporte obliga al usuario a revisar cada registro de forma secuencial para localizar información relevante. Esta organización incrementa el esfuerzo necesario para interpretar los datos y dificulta la identificación inmediata de situaciones críticas.

### Ausencia de jerarquía visual

Todos los elementos poseen el mismo nivel de importancia visual. La falta de colores, agrupaciones e indicadores hace que los pacientes críticos no destaquen respecto a los demás registros.

### Organización poco orientada a la toma de decisiones

La disponibilidad de camas, personal médico y recursos hospitalarios aparece al final del reporte, impidiendo obtener una visión general del estado de la sala sin revisar previamente todo el contenido.

---

# Selección Tecnológica

### ¿Quién recibirá la información?

El Dashboard está dirigido al Director Médico, quien requiere una visión general del estado de la sala de emergencias para coordinar recursos, supervisar pacientes críticos y apoyar la toma de decisiones clínicas.

### ¿Cómo accederá a ella?

La aplicación está diseñada para ejecutarse desde equipos de escritorio o tabletas con acceso a la red institucional del hospital, permitiendo una visualización adecuada en diferentes tamaños de pantalla.

### ¿Con qué rapidez se requiere?

La información debe actualizarse de manera continua para reflejar oportunamente el estado de los pacientes y la disponibilidad de recursos hospitalarios.

### ¿Qué nivel de interacción requiere?

El sistema permite filtrar pacientes por gravedad, realizar búsquedas, ordenar registros según prioridad y visualizar información detallada de cada paciente cuando sea necesario.

---

# Fundamentación Teórica

## Modelo Conceptual

### Información

Se priorizaron los datos necesarios para la toma de decisiones inmediatas, tales como el número de pacientes por nivel de gravedad, disponibilidad de camas, médicos disponibles y pacientes pendientes de traslado. La información secundaria fue resumida para reducir la sobrecarga cognitiva del usuario.

### Presentación

La interfaz organiza la información mediante indicadores KPI, tarjetas informativas, tablas estructuradas y códigos de color que permiten identificar rápidamente el nivel de prioridad de cada paciente.

| Estado | Representación |
|---------|----------------|
| Leve | Verde |
| Moderado | Amarillo |
| Grave | Naranja |
| Crítico | Rojo |

### Contexto

El Dashboard fue diseñado considerando que será utilizado en un entorno hospitalario donde las decisiones deben tomarse con rapidez y precisión. La distribución de la información responde a esta necesidad, mostrando primero los elementos de mayor impacto para la operación del servicio.

## Principios de Diseño Aplicados

### Jerarquía Visual

Los indicadores más importantes se ubican en la parte superior de la interfaz, permitiendo obtener una visión general del estado del servicio en pocos segundos.

### Simplicidad

Se eliminaron elementos innecesarios presentes en el reporte original y se organizó la información de forma clara, favoreciendo una interpretación rápida y reduciendo la carga cognitiva.

### Consistencia

Todos los componentes mantienen una estructura uniforme en cuanto a colores, tipografía y distribución, proporcionando una experiencia de uso coherente.

### Accesibilidad

Se utilizaron contrastes adecuados, etiquetas descriptivas y códigos de color para facilitar la lectura e interpretación de la información.

---

# Diseño Propuesto

El Dashboard organiza la información en cuatro áreas principales:

- Resumen general mediante indicadores KPI.
- Estado de los recursos hospitalarios.
- Alertas de pacientes críticos.
- Tabla con el detalle de todos los pacientes.

## Indicadores Principales

| Indicador | Valor |
|-----------|------:|
| Total de pacientes | 12 |
| Pacientes críticos | 4 |
| Pacientes graves | 3 |
| Pacientes moderados | 2 |
| Pacientes leves | 3 |

## Recursos Hospitalarios

| Recurso | Disponibilidad |
|----------|---------------:|
| Camas de observación | 0 / 10 |
| Camas críticas | 0 / 3 |
| Camas UCI | 1 / 8 |
| Médicos disponibles | 1 |

Las capturas del Dashboard y del prototipo se encuentran en la carpeta **img** del repositorio.

---

# Tecnologías Utilizadas

| Tecnología | Descripción |
|------------|-------------|
| HTML5 | Estructura del Dashboard |
| Tailwind CSS | Diseño de la interfaz |
| JavaScript ES6 | Funcionalidad e interacción |
| Git | Control de versiones |
| GitHub | Publicación del proyecto |

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
└── assets/
```

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

3. Abrir el archivo **index.html** en cualquier navegador moderno.

---

# Conclusiones

El rediseño desarrollado demuestra la importancia que tiene la presentación de la información dentro de un sistema de información. A partir del análisis del reporte heredado fue posible identificar limitaciones relacionadas con la organización de los datos, la ausencia de jerarquía visual y la dificultad para interpretar rápidamente la información disponible.

La propuesta organiza la información mediante indicadores visuales, tablas estructuradas y una distribución basada en prioridades, permitiendo que el Director Médico obtenga una visión general del estado de la sala de emergencias en un menor tiempo. Asimismo, la utilización de códigos de color y componentes gráficos favorece la identificación de pacientes críticos y la disponibilidad de recursos hospitalarios.

En conjunto, la solución desarrollada evidencia cómo un diseño adecuado de las salidas puede mejorar la experiencia del usuario y proporcionar información más clara, organizada y útil para apoyar la toma de decisiones dentro de un entorno hospitalario.
