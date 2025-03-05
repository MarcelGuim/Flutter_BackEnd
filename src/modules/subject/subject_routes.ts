import express from 'express';
import { 
  createSubject, 
  searchSubject, 
  updateSubjectByName, 
  deleteSubject, 
  assignSubjectToUser, 
  getUsersFromSubject 
} from './subject_controller.js';

const router = express.Router();

/**
 * @openapi
 * /subject/:
 *   post:
 *     summary: Crea un nuevo subject
 *     tags:
 *       - Subjects
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               teacher:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario creado exitosamente
 *       500:
 *         description: Server error
 */
router.post('/', createSubject);

/**
 * @openapi
 * /subject/{name}:
 *   get:
 *     summary: Obtiene un subject
 *     tags:
 *       - Subjects
 *     parameters:
 *       - in: path
 *         name: name
 *         description: El nom del subject a cercar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Subject found successfully
 *       404:
 *         description: Subject not found
 *       500:
 *         description: Server error
 */
router.get('/:name', searchSubject);

/**
 * @openapi
 * /subject/{name}:
 *   put:
 *     summary: Actualiza un subject
 *     tags:
 *       - Subjects
 *     parameters:
 *       - in: path
 *         name: name
 *         description: El nom del subject que es vol actualitzar
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               teacher:
 *                 type: string
 *     responses:
 *       200:
 *         description: Subject updated successfully
 *       404:
 *         description: Subject not found
 *       500:
 *         description: Server error
 */
router.put('/:name', updateSubjectByName);

/**
 * @openapi
 * /subject/{name}:
 *   delete:
 *     summary: Elimina un subject per nom
 *     tags:
 *       - Subjects
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         description: El nom del subject a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Subject deleted successfully
 *       404:
 *         description: Subject not found
 *       500:
 *         description: Server error
 */
router.delete('/:name', deleteSubject);

/**
 * @openapi
 * /subject/assign/{userName}/{subjectName}:
 *   put:
 *     summary: Assigna un usuari a un subject
 *     tags:
 *       - Subjects
 *     parameters:
 *       - in: path
 *         name: userName
 *         required: true
 *         description: El nom de l'usuari que es vol assignar
 *         schema:
 *           type: string
 *       - in: path
 *         name: subjectName
 *         required: true
 *         description: El nom del subject al qual assignar l'usuari
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuari assignat correctament
 *       404:
 *         description: Subject not found
 *       405:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.put('/assign/:userName/:subjectName', assignSubjectToUser);

/**
 * @openapi
 * /subject/users/{name}:
 *   get:
 *     summary: Obté usuaris associats a un subject
 *     tags:
 *       - Subjects
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         description: El nom del subject per obtenir els usuaris
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuaris trobats correctament
 *       201:
 *         description: No users found
 *       404:
 *         description: Subject not found
 *       500:
 *         description: Server error
 */
router.get('/users/:name', getUsersFromSubject);

export default router;
