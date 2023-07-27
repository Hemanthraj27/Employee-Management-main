import { body, param, validationResult } from 'express-validator';

// Role request validation and sanitization
 const validateUpdateEmployee = async (req) => {
  // Validation and sanitization rules for request fields
  const { emp_id } = req.params;
  const empIdNumber = parseInt(emp_id, 10);

  const validations = [
    param('emp_id').isInt().withMessage('Employee ID must be an integer'),
    body('firstname').isString().withMessage('First name is required and must be a string'),
    body('lastname').isString().withMessage('Last name is required and must be a string'),
    body('gender').isIn(['Male', 'Female', 'Other']).withMessage('Invalid gender'),
    body('address').notEmpty().withMessage('Address is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('mobile_no').isInt().withMessage('Mobile number must be an integer'),
    body('age').isInt({ min: 18, max: 99 }).withMessage('Age must be between 18 and 99'),
    body('date_of_join').isDate().withMessage('Invalid date format'),
    body('dept_id').isInt().withMessage('Department ID must be an integer'),
    body('dept_name').isString().notEmpty().withMessage('Department name is required'),
    body('role_id').isInt().withMessage('Role ID must be an integer'),
    body('role_name').isString().notEmpty().withMessage('Role name is required'),
    body('is_active_flag').isBoolean().withMessage('is active must be a boolean (true or false)'),
  ];

  // Run validations using the validation middleware
  await Promise.all(validations.map(validation => validation.run(req)));

  // Check if there are validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    throw new Error(errorMessages.join(', '));
  }

  return { emp_id: empIdNumber };
};


const validateDeleteEmployee = async (req) => {
  // Validation and sanitization rules for request fields
  const { emp_id } = req.params;
  const empIdNumber = parseInt(emp_id, 10);

  const validations = [
    param('emp_id').isInt().withMessage('Employee ID must be an integer'),
  ];

  // Run validations using the validation middleware
  await Promise.all(validations.map(validation => validation.run(req)));

  // Check if there are validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    throw new Error(errorMessages.join(', '));
  }

  return { emp_id: empIdNumber };
};

export { validateUpdateEmployee, validateDeleteEmployee };
