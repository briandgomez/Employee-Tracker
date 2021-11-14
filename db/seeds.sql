INSERT INTO department (id, department_name)
    VALUES 
    (123,'Sales'),
    (987,'Engineering');

INSERT INTO employee_role (title,salary, department_id)
    VALUES
        ('Sales Lead', 100000, 123),
        ('Engineer', 200000, 987);

INSERT INTO employee (first_name,last_name,role_id, title, salary, department_name)
    VALUES
        ('Luis', 'Perez', 123, 'Sales Lead', 100000, 'Sales'),
        ('Kevin', 'Johnson', 987, 'Engineer', 200000, 'Engineering');
