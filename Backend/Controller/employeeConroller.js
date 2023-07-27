import Employee from '../Model/employeeModel.js';
import { validateUpdateEmployee, validateDeleteEmployee } from '../Requests/request.js';

// Update employee by ID
const updateEmployeeById = async (req, res) => {
  try {
    const employeeData = await validateUpdateEmployee(req);

    const updatedEmployee = await Employee.findOneAndUpdate(
      { emp_id: employeeData.emp_id },
      employeeData,
      { new: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    console.log('Employee updated:', updatedEmployee);
    res.status(200).json({ message: 'Employee updated successfully', employee: updatedEmployee });
  } catch (error) {
    console.error('Error updating employee:', error.message); // Log the error message
    res.status(400).json({ error: error.message }); // Send the error message in the response
  }
};

// Delete employee by ID
const deleteEmployeeById = async (req, res) => {
  try {
    const employeeData = await validateDeleteEmployee(req);

    const deletedEmployee = await Employee.findOneAndDelete({ emp_id: employeeData.emp_id });

    if (!deletedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    console.log('Employee deleted:', deletedEmployee);
    res.status(200).json({ message: 'Employee deleted successfully', employee: deletedEmployee });
  } catch (error) {
    console.error('Error deleting employee:', error.message); // Log the error message
    res.status(400).json({ error: error.message }); // Send the error message in the response
  }
};

export {
  updateEmployeeById,
  deleteEmployeeById,
};
