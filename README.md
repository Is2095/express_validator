
# Express-validator

## Validaciones de datos en Node.js con express-validator

Este proyecto demuestra cómo implementar validaciones en el backend utilizando **express-validator**. Las validaciones incluyen entradas básicas y casos complejos, gestionados en un entorno TypeScript.

## Tecnología usada

**Server:** JavaScript, Node.js, Express.js

## Requerimientos

Se requiere tener instalado:

1. **Node.js 14+** 
2. **Express.js 4.X**
3. **express-validator 7.X.X**
4. **Typescript 5.X.X (como dependencia de desarrollo)**
5. **@types/express 5.X.X (como dependencia de desarrollo)**
6. **ts-node-dev 2.X (como dependencia de desarrollo)**

## Ejecución local

1. Clona el repositorio:

Crea la carpeta donde clonarás el proyecto y accede con una terminal, como GitBash, ejecuta el siguiente comando:
```bash
  git clone https://github.com/Is2095/express_validator.git
```

2. Accede al directorio raíz del proyecto:

```bash
  cd express_validator
```

3. Instala las dependencias requeridas
Ejecuta el siguiente comando para instalar las dependencias:

```bash
  * npm install
```

4. Inicia el servidor:

```bash
  * npm run dev
```

## Referencias de la API

##### Endpoint POST /api

Parámetros:

| Parámetro | Ubicación    | Descripción validación        |
| :-------- | :------- | :------------------------- |
| `nombre` | `body` | String, elimina espacios al inicio y fin, 1-9 caracteres, no se permite HTML. | 
| `correo` | `body` | Debe ser un email válido. | 

Respuesta de éxito:

```
{
	"message": "Hola: pepe!"
}

```

Respuesta de error:

```
{
	"error": [
		{ "type": "field", "value": "", "msg": "Nombre es requerido y no debe superar los 9 caracteres", "path": "nombre", "location": "body" },
		{ "type": "field", "value": "vvvvgmail.com", "msg": "Correo no válido", "path": "correo", "location": "body" }
	]
}
```

---

##### Endpoint POST /api/dos


Parámetros:

| Parámetro | Ubicación    | Descripción            |
| :-------- | :------- | :------------------------- |
| `nombre2` | `body` | String, elimina espacios al inicio y fin, 1-9 caracteres, no se permite HTML. | 
| `correo2` | `body` | Debe ser un email válido. | 

Respuesta de éxito:

```
{
	"message": "Hola: pepe!"
}

```

Respuesta de error:

```
{
	"error": [
		{ "type": "field", "value": "", "msg": "Nombre es requerido y no debe superar los 9 caracteres", "path": "nombre2", "location": "body" },
		{ "type": "field", "value": "vvvvgmail.com", "msg": "Correo no válido", "path": "correo2", "location": "body"}
	]
}
```

---

##### Endpoint POST /api/tres

Parámetros:

| Parámetro | Ubicación    | Descripción validación          |
| :-------- | :------- | :------------------------- |
| `nombre` | `body` | No puede estar vacío, los espacios al principio y al final serán eliminados automáticamente, se convertirá todo el texto a mayúsculas y no se permiten etiquetas HTML.|
| `correo` | `body` | No puede estar vacío y debe seguir el formato de una dirección de correo electrónico válida.|
| `telefono` | `body` | Debe ser un número telefónico válido perteneciente a Argentina, Chile, Bolivia o Venezuela.|
| `data` | `body` | Debe ser una cadena en formato JSON válida.|
| `contrasena` | `body` | Debe tener entre 4 y 25 caracteres, contener al menos un número, una letra mayúscula y una letra minúscula.|
| `letras` | `body` | Solo se permiten letras en minúsculas; no se aceptan números ni otros caracteres.|
| `edad` | `body` | Debe ser un número entre 5 y 88, que puede enviarse como un número (ej.: 36) o una cadena que contenga un número (ej.: "36").|
| `precio` | `body` | Debe ser un número, entero o decimal, comprendido entre 0 y 300.|
| `rol` | `body` | El valor debe coincidir con una de las opciones predefinidas en la validación (por ejemplo, "admin", "user").|
| `diaDeSemana` | `body` | Debe ser un día de la semana válido, ya sea definido en un enum o recuperado de la base de datos.|

Respuesta: 

Si los datos recibidos son validados

```
{
	"data": {
		"nombre": "PEPE",
		"correo": "vvvv@gmail.com",
		"telefono": "+5492618859275",
		"data": "{\"name\": \"John Doe\", \"age\": 30, \"isActive\": true}",
		"contrasena": "aa1aaaA",
		"letras": "dfadfasd",
		"edad": "36",
		"precio": 2.2,
		"rol": "user",
		"diaDeSemana": "lunes"
	}
}
```

Si se producen errores en las validaciones

```
{
	"errores": [
		"El número de teléfono no es válido",
		"Formato no válido",
		"La contraseña debe incluir letras mayúsculas",
		"La contraseña debe incluir números",
		"el campo solo admites letras",
		"la edad debe ser un número",
		"la edad debe estar comprendida entre 5 y 88 años",
		"el precio debe estar comprendido entre 0 y 300",
		"el valor rol no es un valor admitido",
		"día de semana no válido",
		"En nombre no puede ser vacío",
		"Correo no válido"
	]
}
```

----

## 🔗 Links
[![PortFolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://portfolio-ismael-diaz.vercel.app)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ismael-diaz-3b440b27a)


## Autor

- Creado por [@Is2095](https://github.com/Is2095)
