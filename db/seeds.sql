INSERT INTO department (id, department_name)
    VALUES 
    (11,'Sales'),
    (22,'Engineering');

INSERT INTO employee_role (title,salary, department_id)
    VALUES
        ('Sales Lead', 100000, 11),
        ('Engineer', 200000, 22);

INSERT INTO employee (first_name,last_name,role_id)
    VALUES
        ('Luis', 'Perez', 11),
        ('Kevin', 'Johnson', 22);
