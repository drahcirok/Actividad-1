# 🏥 Dashboard de Emergencias Médicas
## Rediseño de Salidas Efectivas – Clínica San José

> Proyecto académico desarrollado para la asignatura **Diseño de Salidas Efectivas**.  
> Autor: ____________________________  
> Fecha: ____________________________

---

## 📑 Tabla de Contenidos

- [Introducción](#-introducción)
- [Objetivos](#-objetivos)
- [Contexto del Caso](#-contexto-del-caso)
- [Análisis del Sistema Actual](#-análisis-del-sistema-actual)
- [Selección Tecnológica](#-selección-tecnológica)
- [Fundamentación Teórica](#-fundamentación-teórica)
- [Diseño Propuesto](#-diseño-propuesto)
- [Capturas del Dashboard](#-capturas-del-dashboard)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Cómo Ejecutar el Proyecto](#-cómo-ejecutar-el-proyecto)
- [Conclusiones](#-conclusiones)

---

## 📖 Introducción

La calidad de la información presentada dentro de un sistema influye directamente en la velocidad y precisión con la que los usuarios toman decisiones. Este aspecto adquiere especial importancia en entornos hospitalarios, donde la disponibilidad de recursos y el estado clínico de los pacientes pueden cambiar en cuestión de minutos.

El presente proyecto desarrolla el rediseño del sistema de reportes de la sala de emergencias de la **Clínica San José**. El sistema original muestra la información mediante un reporte textual heredado, saturado y difícil de interpretar rápidamente. Como solución, se propone un **Dashboard interactivo moderno** que organiza la información mediante indicadores visuales, jerarquía gráfica y principios de diseño de interfaces.

La propuesta se fundamenta en los conceptos estudiados en el tema **Diseño de Salidas Efectivas**, priorizando la usabilidad, la reducción de la carga cognitiva y la optimización de la toma de decisiones médicas.

---

## 🎯 Objetivos

### Objetivo General

Diseñar un Dashboard interactivo que reemplace el reporte textual del sistema heredado de la Clínica San José, mejorando la visualización de la información clínica y facilitando la toma de decisiones en el área de emergencias.

### Objetivos Específicos

- Analizar las deficiencias presentes en el reporte original.
- Aplicar el Modelo Conceptual de Diseño de Salidas (**Información, Presentación y Contexto**).
- Implementar principios modernos de diseño de interfaces.
- Diseñar indicadores visuales (KPIs) para monitorear el estado de la sala de emergencias.
- Mejorar la experiencia del usuario mediante una interfaz clara, intuitiva y orientada a decisiones rápidas.

---

## 🏥 Contexto del Caso

La **Clínica San José** enfrenta problemas de saturación en su sala de emergencias. El Director Médico, **Dr. Alejandro Silva**, necesita supervisar constantemente:

- Pacientes críticos que requieren traslado inmediato.
- Disponibilidad de camas de observación y UCI.
- Estado del personal médico de guardia.
- Flujo de ingresos y altas médicas.
- Alertas relacionadas con signos vitales fuera de rango.

El sistema actual entrega esta información mediante un bloque de texto plano, lo que dificulta la identificación inmediata de prioridades clínicas y operativas.

---

## 🔍 Análisis del Sistema Actual

### Deficiencias Críticas Detectadas

| Problema | Impacto | Consecuencia |
|---|---|---|
| Información presentada en texto plano | Alta carga cognitiva | Mayor tiempo para encontrar pacientes críticos |
| Ausencia de jerarquía visual | Baja legibilidad | Riesgo de pasar por alto emergencias |
| Recursos hospitalarios ocultos al final | Baja visibilidad operativa | Retrasos en la asignación de camas |
| Falta de filtros y ordenamiento | Baja eficiencia | Búsqueda manual de pacientes |
| Ausencia de indicadores resumidos | Difícil monitoreo global | No existe una visión inmediata del estado de la sala |

### Deficiencia 1: Sobrecarga Cognitiva

El reporte obliga al usuario a leer secuencialmente cada registro para identificar información relevante. Esta estructura incrementa el esfuerzo mental y retrasa la respuesta ante situaciones críticas.

### Deficiencia 2: Ausencia de Jerarquía Visual

Todos los datos poseen el mismo peso visual. No existen colores, tamaños tipográficos o agrupaciones que permitan distinguir rápidamente pacientes críticos de pacientes leves.

### Deficiencia 3: Bajo Soporte para la Toma de Decisiones

La información sobre camas, UCI y médicos disponibles aparece mezclada con datos clínicos, dificultando obtener una visión global del estado operativo del servicio.

---

## 🧩 Selección Tecnológica

### ¿Quién recibirá la información?

El principal destinatario es el **Director Médico**, quien requiere una visión ejecutiva y priorizada del estado de la sala de emergencias para coordinar recursos y tomar decisiones inmediatas.

### ¿Cómo accederá a ella?

El sistema está diseñado para ejecutarse en computadoras de escritorio y tabletas dentro del hospital, con conexión permanente a la red institucional.

### ¿Con qué rapidez se requiere?

La información debe actualizarse prácticamente en tiempo real, ya que el estado clínico de los pacientes y la disponibilidad de recursos cambian constantemente.

### ¿Qué nivel de interacción requiere?

El dashboard debe permitir:

- Filtrar pacientes por gravedad.
- Buscar registros específicos.
- Ordenar por prioridad clínica.
- Visualizar alertas automáticas.
- Consultar detalles individuales de un paciente.

---

## 📚 Fundamentación Teórica

### Modelo Conceptual Aplicado

#### Información (Qué mostrar)

Se priorizaron los datos que influyen directamente en la toma de decisiones:

- Total de pacientes.
- Pacientes críticos.
- Pacientes graves.
- Disponibilidad de camas.
- Médicos disponibles.
- Pacientes pendientes de traslado a UCI.

Los comentarios clínicos extensos fueron resumidos para conservar únicamente la información indispensable y reducir la sobrecarga cognitiva.

#### Presentación (Cómo mostrar)

La información se organiza mediante:

- Tarjetas KPI.
- Códigos de color.
- Tabla estructurada.
- Iconografía.
- Indicadores de alerta.

La semaforización utilizada es:

- 🟢 Leve
- 🟡 Moderado
- 🟠 Grave
- 🔴 Crítico

#### Contexto (A quién y cuándo)

El dashboard responde a un entorno de urgencias donde las decisiones deben tomarse en segundos. La información crítica aparece primero para minimizar el tiempo de búsqueda y disminuir la probabilidad de errores.

---

### Principios de Diseño Aplicados

#### Jerarquía Visual

Los indicadores más importantes se ubican en la parte superior mediante tarjetas grandes y colores de alto contraste, permitiendo identificar el estado general del servicio en pocos segundos.

#### Simplicidad (Less is More)

Se eliminaron elementos redundantes y se resumieron los textos clínicos, conservando únicamente la información necesaria para la acción inmediata.

#### Consistencia

Todos los componentes utilizan la misma estructura visual, tipografía y esquema de colores, reduciendo la curva de aprendizaje del sistema.

#### Accesibilidad

Se emplearon contrastes adecuados, iconografía complementaria y tamaños de fuente legibles para facilitar la interpretación de la información en diferentes condiciones de uso.

---

## 🖥️ Diseño Propuesto

La interfaz se estructura en cuatro niveles principales:

1. **Resumen ejecutivo** mediante KPIs.
2. **Estado de recursos hospitalarios**.
3. **Alertas de pacientes críticos**.
4. **Tabla detallada de pacientes**.

### Indicadores Principales (KPIs)

| Indicador | Valor |
|---|---:|
| Total de pacientes | 12 |
| Pacientes críticos | 4 |
| Pacientes graves | 3 |
| Pacientes leves | 3 |
| Pacientes moderados | 2 |

### Recursos Hospitalarios

| Recurso | Disponibilidad |
|---|---:|
| Camas de observación | 0 / 10 |
| Camas críticas | 0 / 3 |
| Camas UCI | 1 / 8 |
| Médicos disponibles | 1 |

### Pacientes Prioritarios

| Paciente | Estado | Acción Recomendada |
|---|---|---|
| Carlos Gómez | 🔴 Crítico | Traslado inmediato a UCI |
| Sofía Mejía | 🔴 Crítico | Transferencia urgente |
| Diana Loor | 🔴 Crítico | Evaluación neurológica inmediata |
| Juan Pérez | 🟠 Grave | ECG y cama prioritaria |

---

## 🖼️ Capturas del Dashboard

### Vista General

![Dashboard Principal](img/dashboard.png)

### Panel de Alertas

![Alertas Críticas](img/alertas.png)

### Vista Responsive

![Vista Tablet](img/responsive.png)

> Las imágenes se encuentran en la carpeta `/img` del repositorio.

---

## 💻 Tecnologías Utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura del dashboard |
| Tailwind CSS | Diseño y estilos |
| JavaScript ES6 | Interactividad |
| Heroicons / SVG | Iconografía |
| Git | Control de versiones |
| GitHub | Publicación del proyecto |

---

## 📂 Estructura del Proyecto

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

### Descripción de Archivos

| Archivo | Descripción |
|---|---|
| `index.html` | Estructura principal del dashboard |
| `style.css` | Estilos personalizados |
| `script.js` | Funciones de interacción y actualización |
| `README.md` | Documentación del proyecto |
| `img/` | Capturas y recursos gráficos |

---

## ▶️ Cómo Ejecutar el Proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/usuario/dashboard-emergencias.git
   ```

2. Ingresar a la carpeta del proyecto:
   ```bash
   cd dashboard-emergencias
   ```

3. Abrir el archivo `index.html` en cualquier navegador moderno.

No se requieren dependencias ni procesos de compilación.

---

## 📌 Conclusiones

El rediseño propuesto demuestra cómo la aplicación adecuada de principios de diseño de interfaces y visualización de información puede transformar un reporte textual difícil de interpretar en una herramienta estratégica para la toma de decisiones.

La incorporación de KPIs, jerarquía visual, códigos de color y organización por prioridades reduce significativamente la carga cognitiva del usuario y facilita la identificación inmediata de pacientes críticos y recursos disponibles. Estas mejoras incrementan la usabilidad del sistema y contribuyen a optimizar la eficiencia operativa dentro de un entorno hospitalario donde la rapidez y precisión son fundamentales.

Finalmente, el proyecto evidencia la importancia del **Diseño de Salidas Efectivas** como disciplina orientada a convertir datos en información útil, comprensible y accionable para los distintos niveles de decisión dentro de una organización.

---

<div align="center">

### 🏥 Clínica San José – Dashboard de Emergencias
**Proyecto académico de Diseño de Salidas Efectivas**

</div>
