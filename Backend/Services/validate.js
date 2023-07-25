import Joi from 'joi';
import Employee from '../Model/employeeModel.js';
//work in progress need more research 
// Validation schema for updating employee
const updateEmployeeSchema = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  gender: Joi.string().valid('Male', 'Female', 'Other').required(),
  address: Joi.string().required(),
  email: Joi.string().email().required(),
  mobile_no: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
  age: Joi.number().integer().positive().min(21).required(),
  date_of_join: Joi.date().required(),
  dept_id: Joi.number().integer().positive().required(),
  dept_name: Joi.string().required(),
  role_id: Joi.number().integer().positive().required(),
  role_name: Joi.string().required(),
  reporting_to_id: Joi.number().integer().positive().allow(null),
});
