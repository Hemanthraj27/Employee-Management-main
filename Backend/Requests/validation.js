// request/validation.js

import { body, validationResult } from 'express-validator';

// Middleware function for request body validation
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const validationErrors = errors.array().map((err) => err.msg);
    return res.status(400).json({ errors: validationErrors });
  }
  next();
};

// Custom validation rules for createEmployee API
export const validateCreateEmployee = [
  body('emp_id').isInt().withMessage('Employee ID must be an integer'),
  body('firstname').isString().withMessage('First name is required'),
  body('lastname').notEmpty().withMessage('Last name is required'),
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
  validateRequest,
];

// Custom validation rules for updateEmployee API
export const validateUpdateEmployee = [
  body('firstname').notEmpty().withMessage('First name is required'),
  body('lastname').notEmpty().withMessage('Last name is required'),
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
  validateRequest,
];

// Custom validation rules for deleteEmployee API
export const validateDeleteEmployee = [
  body('emp_id').isInt().withMessage('Employee ID must be an integer'),
  validateRequest,
];
