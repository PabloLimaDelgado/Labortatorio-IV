/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "607f1f77bcf86cd799439041"
 *         titulo:
 *           type: string
 *           example: "Diseñar login"
 *         descripcion:
 *           type: string
 *           example: "Crear el diseño de pantalla de inicio de sesión"
 *         estado:
 *           type: string
 *           example: "Pendiente"
 *         prioridad:
 *           type: string
 *           example: "Alta"
 *         fechaCreacion:
 *           type: string
 *           format: date-time
 *           example: "2024-04-15T12:00:00Z"
 *         fechaVencimiento:
 *           type: string
 *           format: date
 *           example: "2024-04-20"
 *
 *     TaskInput:
 *       type: object
 *       required:
 *         - titulo
 *         - estado
 *       properties:
 *         titulo:
 *           type: string
 *           example: "Diseñar login"
 *         descripcion:
 *           type: string
 *           example: "Crear el diseño de pantalla de inicio de sesión"
 *         estado:
 *           type: string
 *           example: "Pendiente"
 *         prioridad:
 *           type: string
 *           example: "Alta"
 *         fechaVencimiento:
 *           type: string
 *           format: date
 *           example: "2024-04-20"
 */

/**
 * @swagger
 * tags:
 *   name: Tareas
 *   description: Operaciones relacionadas con tareas
 */

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Obtiene todas las tareas (con filtros opcionales)
 *     tags: [Tareas]
 *     parameters:
 *       - in: query
 *         name: estado
 *         schema:
 *           type: string
 *         required: false
 *         description: Filtrar por estado de tarea
 *     responses:
 *       200:
 *         description: Lista de tareas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */

/**
 * @swagger
 * /tasks/{idTask}:
 *   get:
 *     summary: Obtiene una tarea por ID
 *     tags: [Tareas]
 *     parameters:
 *       - in: path
 *         name: idTask
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la tarea
 *     responses:
 *       200:
 *         description: Tarea encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 */

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Crea una nueva tarea
 *     tags: [Tareas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TaskInput'
 *     responses:
 *       200:
 *         description: Tarea creada exitosamente
 */

/**
 * @swagger
 * /tasks/{idTask}:
 *   put:
 *     summary: Actualiza una tarea existente
 *     tags: [Tareas]
 *     parameters:
 *       - in: path
 *         name: idTask
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la tarea
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TaskInput'
 *     responses:
 *       200:
 *         description: Tarea actualizada exitosamente
 */

/**
 * @swagger
 * /tasks/{idTask}:
 *   delete:
 *     summary: Elimina una tarea por ID
 *     tags: [Tareas]
 *     parameters:
 *       - in: path
 *         name: idTask
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la tarea a eliminar
 *     responses:
 *       200:
 *         description: Tarea eliminada exitosamente
 */
