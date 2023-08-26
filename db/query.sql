--Retrieves column info(department_id) from table 1(employee_role)
SELECT department_id
FROM employee_role
--Combines the 2 tables(employee_role and department) through 2 columns (department and id)
INNER JOIN department 
ON employee_role.department_id = department.id;