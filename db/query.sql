SELECT department_id
FROM employee_role
INNER JOIN department 
ON employee_role.department_id = department.id;