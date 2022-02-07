const inquirer = require("inquirer");//inquirer package-npm i inquirer
const mysql = require('mysql2');//mysql2package -npm i mysql2
const consoleTable = require('console.table')//package for npm i console.table from  https://www.npmjs.com/package/console.table
// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      //  Add MySQL password here
      password: '',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );
  db.connect((err) => {
    if (err) throw err;
    question();
  });


//question-view all dept,view all emp,add a dept,add a role,add a employee,update emp role
function question() {
    inquirer.prompt([
        {
          type: 'list',
          message: "what would you like to do ? ",
          name: 'questions',
          choices: ['View all departments','View all employee','View all roles','Add a department','Add a role','Add a employee','Update a employee role']
        },
       
      ])
    
        .then((response) => {
            
            if(response.questions == 'View all departments'){
                viewAllDepartment();//if choice is viewalldept,  function viewAllDepartment is called
            }
            else if(response.questions == 'View all employee')
            {
                viewAllEmployee();
            }
            else if(response.questions == 'View all roles')
            {
                viewAllRole();
            }
            else if(response.questions == 'Add a department')
            {
                addDepartment();
            }
            else if(response.questions == 'Add a role')
            {
                addRole();
            }
            else if(response.questions == 'Add a employee')
            {
                addEmployee();
            }
            else{
                updateEmployeeRole();
            }
         // console.log(response);
        });
        
}
//view all dept(name,id)
function viewAllDepartment(){
    const sql=`SELECT * FROM department`;
    db.query(sql,(err,result)=>{
        if (err){
            throw err
        }
        console.table(result);
        question();
    })
   
}
//view all employees(emp data,id,firstname ,last name,job title, dept,salary,and manager that emp report to)

function viewAllEmployee(){
    const sql=`SELECT * FROM employee`;
    db.query(sql,(err,result)=>{
        if (err)
            throw err
        
       console.table(result);
       question();
    })
   
} 
//view all roles(job title, role id, dept the role belong to , salary)
function viewAllRole(){
   // const sql=`SELECT role.title,role.salary,department.name,department.id FROM role JOIN department ON department.id = role.department_id`;
   const sql="SELECT r.title,r.salary,d.name,d.id FROM role AS r JOIN department AS d ON d.id = r.department_id";
    db.query(sql,(err,result)=>{
        if (err)
            throw err
        
       console.table(result);
       question();
    })
    
} 

//add a dept->add -name
function addDepartment(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'deptName',
            message: 'what is the name of the department ?'
        }
    ]) 
    .then((response) => {
       
        const sql=`INSERT INTO department (name) VALUES (?)`;//use name from depart name in schema.sql
        db.query(sql,response.deptName,(err,result)=>{
            if (err)
            throw err
            console.table(result);
            question();
      });  

    });  
   
}

//add a role(enter name,salary,dept for role,that role added to db)
function addRole(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',//from schema table name
            message: 'what is the name of the role ?'
        },
        {
            type: 'input',
            name:'salary',
            message: 'what is the salary of the role ?'
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'which department does the role belong to ?'
            //choices     //department name(viewalldepartment)
        }
    ]) 
    .then((response) => {
       
        const sql=`INSERT INTO role SET ? `;//use name from role in schema.sql/seeds(dept id ,title ,salary)
        db.query(sql,response,(err,result)=>{
            if (err)
            throw err
            console.log(result);
            question();
      }); 

    });  
    
}
// add a employee(emp first name,last name, role, manager- and emp added to db)
function addEmployee(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'what is the employee first name ?'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'what is the employee last name?'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'what is the employee role ?'
          //choices         //role title display-
        },
        {
            type: 'input',
            name: 'manager_id' ,
            message: 'who is the employee manager ?'
           // choices            //none,display employee first and last name
        }
    ])
    .then((response) => {
       
        const sql=`INSERT INTO employee SET ?`;//use name from role in schema.sql/seeds(first name, lastname,role id, manager id)
        db.query(sql,response,(err,result)=>{
            if (err)
            throw err
            console.log(result);
            question();
      });  
    });  
   
}
// update employee role(select employee to update-new role and info updated to db)// need to update role id (role id ,emp id needed)
function updateEmployeeRole(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'employee',
            message: 'which employee role do you want to update?'
           // choice                   //need emp name 
        },
        {
            type: 'input',
            name:  "role"   ,
            message: 'which role do you want to assign the selected employee ?'
           // choices                    //need role title 
        }
 
    ])

    .then((response) => {
       
        const sql=`UPDATE employee SET role_id = ? WHERE id = ?`;
        db.query(sql,[response],(err,result)=>{
            if (err)
            throw err
            console.log(result);
            question(); 
      });  
    }); 
   
}
