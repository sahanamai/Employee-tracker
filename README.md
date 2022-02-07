# Employee-tracker
This application allows a user to track employees in a company.The user can view all departments, view all roles, view all employees,add a department, add a role, add a employee,and update an employee role.when the choice is made for view all departments, a formatted table showing department named and id will be displayed.when the view all role  choice is made, the view role details in the database table is displayed(job title, role id, salary,dep id) . when view all employee choice is made , then all employee name with rolr id and manger id is displayed. The add employee, role and department allows user to add employee details, roles and department.This application also allows user to update an employee role using id.
## Installation
* npm init -y
* npm install inquirer
* npm install mysql2
* npm install console.table (to print MYSQL rows to console)
## Usage
* To run schema.sql and seeds.sql file,type following command in mysql :
- SOURCE schema.sql
- SOURCE seeds.sql 
* To run index.js , type following command in bash:
- node index.js
## Technology
- node.js
- inquirer
- mysql
## License 
This project is licensed under MIT.
## Screenshot

![employee tracker 1](https://user-images.githubusercontent.com/41078587/152723564-a2111e19-3b15-47d1-b40f-1bac9e48cbed.png)
