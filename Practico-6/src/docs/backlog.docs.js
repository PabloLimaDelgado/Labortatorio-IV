/**
 * @swagger
 * components:
 *   schemas:
 *     Backlog:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "607f1f77bcf86cd799439021"
 *         nombre:
 *           type: string
 *           example: "Backlog Proyecto A"
 *         tareas:
 *           type: array
 *           items:
 *             type: string
 *           example: ["607f1f77bcf86cd799439031", "607f1f77bcf86cd799439032"]
 *
 *     BacklogInput:
 *       type: object
 *       required:
 *         - nombre
 *       properties:
 *         nombre:
 *           type: string
 *           example: "Backlog Proyecto A"
 *         tareas:
 *           type: array
 *           items:
 *             type: string
 */

/**
 * @swagger
 * tags:
 *   name: Backlog
 *   description: Operaciones relacionadas con los backlogs
 */

/**
 * @swagger
 * /backlogs/{idBacklog}:
 *   get:
 *     summary: Obtiene un backlog por ID
 *     tags: [Backlog]
 *     parameters:
 *       - in: path
 *         name: idBacklog
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del backlog
 *     responses:
 *       200:
 *         description: Backlog encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Backlog'
 */

/**
 * @swagger
 * /backlogs:
 *   post:
 *     summary: Crea un nuevo backlog
 *     tags: [Backlog]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BacklogInput'
 *     responses:
 *       200:
 *         description: Backlog creado exitosamente
 */

/**
 * @swagger
 * /backlogs/{idBacklog}/add_task/{idTask}:
 *   put:
 *     summary: Agrega una tarea existente a un backlog
 *     tags: [Backlog]
 *     parameters:
 *       - in: path
 *         name: idBacklog
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del backlog
 *       - in: path
 *         name: idTask
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la tarea a agregar
 *     responses:
 *       200:
 *         description: Tarea agregada exitosamente al backlog
 */
