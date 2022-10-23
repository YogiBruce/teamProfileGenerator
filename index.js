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
            message: `Please enter name of Team Manager: `,
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log(`\nPlease enter name of Team Manager`)
                    return false
                }
            }
        },
        {
            type: `input`,
            name: `id`,
            message: `Please enter Team Manager's id #: `,
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log(`\nPlease enter the id # of Team Manager`)
                    return false
                }
            }
        },
        {
            type: `input`,
            name: `email`,
            message: `Please enter Team Manager's email address: `,
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log(`\nPlease enter a valid email!`)
                    return false
                }
            }
        },
        {
            type: `input`,
            name: `officeNumber`,
            message: `Please enter Team Manager's office number: `,
            validate: userInput => {
                if (isNaN(userInput)) {
                    console.log(`\nPlease enter the office number for the Team Manager`)
                    return false;
                } else {
                    return true;
                }
            }
        },

    ])
        //Add manager's information to data array
        .then(managerData => {
            const { name, id, email, officeNumber } = managerData;
            const manager = new Manager(name, id, email, officeNumber);

            employeeArray.push(manager);

            //console.log(manager);
        })
};




//Add additional employees
const addEmployee = () => {
    console.log(`
    =========================
    Let's add a teammate!
    =========================
    `)
    
    return inquirer.prompt([
        {
            type: `list`,
            name: `role`,
            message: "Please select your employee's role:",
            choices: [`Engineer`, `Intern`]
        },
        {
            type: `input`,
            name: `name`,
            message: `Please enter name of employee: `,
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log(`\nPlease enter name of employee`);
                    return false;
                }
            }
        },
        {
            type: `input`,
            name: `id`,
            message: `Please enter employee's id #: `,
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log(`\nPlease enter the id # of employee`);
                    return false;
                }
            }
        },
        {
            type: `input`,
            name: `email`,
            message: `Please enter employee's email address: `,
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log(`\nPlease enter a valid email!`);
                    return false;
                }
            }
        },
        {
            type: `input`,
            name: `github`,
            message: `Please enter employee's github username: `,
            when: (input) => input.role === "Engineer",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log(`\nPlease enter employee's github username`);
                }
            }
        },
        {
            type: `input`,
            name: `school`,
            message: `Please enter name of intern's school: `,
            when: (input) => input.role === "Intern",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log(`\nPlease enter the intern's school`);
                }
            }
        },
        {
            type: `confirm`,
            name: `confirmAddEmployee`,
            message: `Are there more team members to add?`,
            default: false

        },
    ])
        .then(employeeData => {
            let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
            let employee;

            if (role === "Engineer") {

                employee = new Engineer(name, id, email, github);

                //console.log(employee);

            } else if (role === "Intern") {

                employee = new Intern(name, id, email, school);

                //console.log(employee);
            }

            employeeArray.push(employee);

            if (confirmAddEmployee) {
                return addEmployee(employeeArray)
            } else {
                return employeeArray;
            }
        })
};

//Function using FS to create blank HTML
const writeFile = data => {
    fs.writeFile(`./dist/index.html`, data, err => {
        if (err) {
            console.log(err)
            return
        } else {
            console.log(`Your team profile has been succesfully created! Please check out the index.html`)
        }
    })

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
