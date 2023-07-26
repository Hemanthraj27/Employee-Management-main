// response.js
const handleUpdateResponse = (res, updatedEmployee) => {
    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
  
    return res.status(200).json(updatedEmployee);
  };
  
  const handleDeleteResponse = (res, deletedEmployee) => {
    if (!deletedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
  
    return res.status(200).json(deletedEmployee);
  };
  
  export { handleUpdateResponse, handleDeleteResponse };
  