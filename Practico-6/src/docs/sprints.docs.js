/**
 * @swagger
 * components:
 *   schemas:
 *     Sprint:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "607f1f77bcf86cd799439011"
 *         nombre:
 *           type: string
 *           example: "Sprint 1"
 *         fechaInicio:
 *           type: string
 *           format: date
 *           example: "2024-04-10"
 *         fechaFin:
 *           type: string
 *           format: date
 *           example: "2024-04-20"
 *         tareas:
 *           type: array
 *           items:
 *             type: string
 *           example: ["607f1f77bcf86cd799439012", "607f1f77bcf86cd799439013"]
 *
 *     SprintInput:
 *       type: object
 *       required:
 *         - nombre
 *         - fechaInicio
 *         - fechaFin
 *       properties:
 *         nombre:
 *           type: string
 *           example: "Sprint 1"
 *         fechaInicio:
 *           type: string
 *           format: date
 *           example: "2024-04-10"
 *         fechaFin:
 *           type: string
 *           format: date
 *           example: "2024-04-20"
 *         tareas:
 *           type: array
 *           items:
 *             type: string
 */

/**
 * @swagger
 * tags:
 *   name: Sprints
 *   description: Operaciones relacionadas con los sprints
 */

/**
 * @swagger
 * tags:
 *   name: Sprints
 *   description: Operaciones relacionadas con los sprints
 */

/**
 * @swagger
 * /sprints:
 *   get:
 *     summary: Obtiene todos los sprints
 *     tags: [Sprints]
 *     responses:
 *       200:
 *         description: Lista de sprints
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Sprint'
 */

/**
 * @swagger
 * /sprints/{idSprint}:
 *   get:
 *     summary: Obtiene un sprint por ID
 *     tags: [Sprints]
 *     parameters:
 *       - in: path
 *         name: idSprint
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del sprint
 *     responses:
 *       200:
 *         description: Sprint encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sprint'
 */

/**
 * @swagger
 * /sprints:
 *   post:
 *     summary: Crea un nuevo sprint
 *     tags: [Sprints]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SprintInput'
 *     responses:
 *       200:
 *         description: Sprint creado exitosamente
 */

/**
 * @swagger
 * /sprints/{idSprint}:
 *   put:
 *     summary: Modifica un sprint existente
 *     tags: [Sprints]
 *     parameters:
 *       - in: path
 *         name: idSprint
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del sprint
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SprintInput'
 *     responses:
 *       200:
 *         description: Sprint actualizado exitosamente
 */

/**
 * @swagger
 * /sprints/{idSprint}:
 *   delete:
 *     summary: Elimina un sprint por ID
 *     tags: [Sprints]
 *     parameters:
 *       - in: path
 *         name: idSprint
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del sprint a eliminar
 *     responses:
 *       200:
 *         description: Sprint eliminado exitosamente
 */

/**
 * @swagger
 * /sprints/{idSprint}/add_task/{idTask}:
 *   put:
 *     summary: Agrega una tarea existente a un sprint
 *     tags: [Sprints]
 *     parameters:
 *       - in: path
 *         name: idSprint
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del sprint
 *       - in: path
 *         name: idTask
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la tarea
 *     responses:
 *       200:
 *         description: Tarea agregada exitosamente al sprint
 */
