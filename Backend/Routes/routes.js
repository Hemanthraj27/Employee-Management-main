//routes.js
import express from 'express';

import {
   updateEmployeeById, 
   deleteEmployeeById,
} from '../Controller/employeeConroller.js'

const router = express.Router();

// Update user
router.put('/employees/:emp_id', updateEmployeeById);

// Delete user
router.delete('/employees/:emp_id', deleteEmployeeById);

export default router;

