INSERT INTO department (id, department_name)
    VALUES 
    (1,'Sales'),
    (2,'Engineering'),
    (3,'Human Resources'),
    (4,'Accounting');

INSERT INTO employee_role (title,salary, department_id)
    VALUES
        ('Sales Lead', 700000, 1),
        ('Engineer', 200000, 2),
        ('Recruiter ', 50000, 3),
        ('Accountant', 80000, 4);

INSERT INTO employee (first_name, last_name, role_id, title, salary, department_name)
    VALUES
        ('Luis', 'Perez', 1, 'Sales Lead', 100000, 'Sales'),
        ('Kevin', 'Johnson', 2, 'Engineer', 200000, 'Engineering'),
        ('Luis', 'Sandoval', 3, 'Recruiter', 50000, 'Human Resources'),
        ('Megan', 'Martin', 4, 'Accountant', 80000, 'Accounting');    