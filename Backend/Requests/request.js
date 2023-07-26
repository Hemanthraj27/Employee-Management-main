import { body, validationResult } from 'express-validator';
import Employee from '../Model/employeeModel.js';

// Validation middleware for updating employee data
const validateUpdateEmployeeData = [
  body('emp_id').isInt().withMessage('Employee ID must be an integer'),
  body('firstname').isString().withMessage('First name is required and must be a string'),
  body('lastname').isString().withMessage('Last name is required and must be a string'),
  body('gender').isIn(['Male', 'Female', 'Other']).withMessage('Invalid gender'),
  body('address').notEmpty().withMessage('Address is required'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('mobile_no').isInt().withMessage('Mobile number must be an integer'),
  body('age').isInt({ min: 18, max: 99 }).withMessage('Age must be between 18 and 99'),
  body('date_of_join').isDate().withMessage('Invalid date format'),
  body('dept_id').isInt().withMessage('Department ID must be an integer'),
  body('dept_name').notEmpty().withMessage('Department name is required'),
  body('role_id').isInt().withMessage('Role ID must be an integer'),
  body('role_name').notEmpty().withMessage('Role name is required'),
];

// Validation middleware for deleting an employee
const validateDeleteEmployee = [
  body('emp_id').isInt({ min: 1 }).withMessage('Valid employee ID is required.'),
];

// Function to validate and return validation errors if any
const validateEmployeeData = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // If no errors, proceed to the next middleware or controller function
  next();
};

export { validateUpdateEmployeeData, validateDeleteEmployee, validateEmployeeData };
