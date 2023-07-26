//employeeModel.js
import { Schema, model } from 'mongoose';

const employeeSchema = new Schema({
  emp_id: {
    type: Number,
    unique: true,
    required: [true, 'Employee ID is required.'],
  },
  firstname: {
    type: String,
    required: [true, 'First name is required.'],
  },
  lastname: {
    type: String,
    required: [true, 'Last name is required.'],
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: [true, 'Gender is required.'],
  },
  address: {
    type: String,
    required: [true, 'Address is required.'],
  },
  email: {
    type: String,
    required: [true, 'Email address is required.'],
  },
  mobile_no: {
    type: Number,
    required: [true, 'Mobile number is required.'],
  },
  age: {
    type: Number,
    required: [true, 'Age is required.'],
  },
  date_of_join: {
    type: Date,
    required: [true, 'Date of join is required.'],
  },
  dept_id: {
    type: Number,
    required: [true, 'Department ID is required.'],
  },
  dept_name: {
    type: String,
    required: [true, 'Department name is required.'],
  },
  role_id: {
    type: Number,
    required: [true, 'Role ID is required.'],
  },
  role_name: {
    type: String,
    required: [true, 'Role name is required.'],
  },
  reporting_to_id: {
    type: Number,
  },
  inserted_date: {
    type: Date,
    default: Date.now,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
  is_active_flag: {
    type: Boolean,
    default: true,
  },
  inserted_by: {
    type: String,
  },
  updated_by: {
    type: String,
  },
});

const Employee = model('Employee', employeeSchema);

export default Employee;
