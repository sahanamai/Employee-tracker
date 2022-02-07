INSERT INTO department (name)  
VALUES ("Engineering"),
       ("Finance"),
       ("legal"),
       ("sales");

 INSERT INTO role (department_id,title,salary)
VALUES (4,"Sales Lead",100000),
       (4,"Salesperson",80000),
       (1,"Lead Engineer",150000),
       (1,"Software Engineer",120000),
       (2,"Account Manager",160000),
       (2,"Accountant",125000),
       (3,"Leagal Team Lead",250000),
       (3,"Lawyer",190000);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, null),
    ("Mike", "Chan", 2, 1),
    ("Ashley", "Rodriguez", 3, null),
    ("Kevin", "Tupik", 4, 2),
    ("Kunal", "Singh", 5, null),
    ("Malia", "Brown", 6, 3),
    ("Sarah", "Lourd", 7, null),
    ("Tom", "Allen", 8, 4);