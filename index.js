//Connect with generateHTML
const generateHTML = require(`./src/generateHTML`);

//Node modules
const fs = require(`fs`);
const inquirer = require('inquirer');

//Employee scripts
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);

//Initiate array for employee data
const employeeArray = [];

//Begin prompting user
const addManager = () => {
    
    console.log(`
    ===================
    Let's build a team!
    ===================
    `);

    return inquirer.prompt([
        {
            type: `input`,
            name: `name`,
            message: `Please enter name of Team Manager:`,
            validate: userInput => {
                if (userInput){
                    return true;
                } else {
                    console.log(`Please enter name of Team Manager\n `)
                    return false
                }
            }
        },
        {
            type: `input`,
            name: `id`,
            message: `Please enter Team Manager's id #:`,
            validate: userInput => {
                if (userInput){
                    return true;
                } else {
                    console.log(`Please enter the id # of Team Manager\n `)
                    return false
                }
            }
        },
        {
            type: `input`,
            name: `email`,
            message: `Please enter Team Manager's email address:`,
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log(`Please enter a valid email!\n`)
                    return false
                }
            }
        },
        {
            type: `input`,
            name: `officeNumber`,
            message: `Please enter Team Manager's office number:`,
            validate: userInput => {
                if (isNaN(userInput)) {
                    console.log(`Please enter the office number for the Team Manager\n`)
                    return false;
                } else {
                    return true;
                }
            }
        },
       
    ])
//Add manager's information to data array
.then(managerData => {
    const {name, id, email, officeNumber} = managerData;
    const manager = new Manager (name, id, email, officeNumber);

    employeeArray.push(manager);
    console.log(manager);
})
};

//Add additional employees
const addEmployee = () => {

};

//Function using FS to create blank HTML
const writeFile = data => {

};

//Create team array and pass data into generateHTML
addManager()
.then(addEmployee)
.then(employeeArray => {
    return generateHTML(employeeArray);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err);
});

// Prompt/validate email
// var inquirer = require('inquirer');
// function promptUser() {
//     return inquirer
//       .prompt(
//               {
//           message: "Please enter your email",
//           name: "email",
//           type: "input",
//           default: () => {},
//           validate: function (email) {
  
//               valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  
//               if (valid) {
//                 console.log("Great job");
//                   return true;
//               } else {
//                   console.log(".  Please enter a valid email")
//                   return false;
//               }
//           }
//         }
//       );
//   }

//   promptUser();