INSERT INTO departments (name)
VALUES ('Electronics'), ('Fulfillment'), ('Inbound');

INSERT INTO roles (title, salary, department_id)
VALUES ('Bagger', 50000, 1),
('Checkout Lead', 45000, 2),
('Stocker', 50000, 3),
('Stock Team Lead', 45000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('William', 'Kidd', 4, NULL),
('Amy', 'Anderson', 3, 1),
('Matthew', 'Stein', 3, 1),
('Jacob', 'Higgins', 2, NULL),
('Matthew', 'Carson', 1, 4);

SELECT CONCAT(employees.first_name, ' ', employees.last_name) AS Name, roles.title AS Title, CONCAT(managers.first_name, ' ', managers.last_name) AS Manager
FROM employees
JOIN roles
ON role_id = roles.id
LEFT JOIN employees AS managers
ON employees.manager_id = managers.id;