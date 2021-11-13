INSERT INTO department (id, department_name)
    VALUES 
    (1,'Sales'),
    (2,'Engineering');

INSERT INTO employee_role (title,salary, department_id)
    VALUES
        ('Sales Lead', 100000, 1),
        ('Engineer', 200000, 2);

INSERT INTO employee (first_name,last_name,role_id)
    VALUES
        ('Luis', 'Perez', 1),
        ('Kevin', 'Johnson', 2);
