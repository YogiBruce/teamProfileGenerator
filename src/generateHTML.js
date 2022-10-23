//Divs for employee cards:

//Manager
const generateManager = function (manager) {
    return `<div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${manager.name}</h3>
            <div class="row"><i class="fa-solid fa-mug-hot pr-2"></i>
                <h4>Manager</h4>
            </div>
        </div>

        <div class="card-body">
            <p>ID: ${manager.id}</p>
            <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p>Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
</div> `;
};

//Engineer
const generateEngineer = function (engineer) {
    return `<div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${engineer.name}</h3>
            <div class="row"><i class="fa-solid fa-glasses pr-2"></i>
                <h4>Engineer</h4>
            </div>
        </div>

        <div class="card-body">
            <p>ID: ${engineer.id}</p>
            <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
</div> `;
};

//Intern
const generateIntern = function (intern) {
    return `<div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${intern.name}</h3>
            <div class="row"><i class="fa-solid fa-graduation-cap pr-2"></i><h4>Intern</h4></div>
        </div>

        <div class="card-body">
            <p>ID: ${intern.id}</p>
            <p>Email: <a href="${intern.email}">${intern.email}</a></p>
            <p>School: ${intern.school}</p>
        </div>
    </div>
</div> `;
};



//Generate employee html cards and push into array.
generateHTML = (data) => {

    teamArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === `Manager`) {
            const managerCard = generateManager(employee);

            teamArray.push(managerCard);
        }

        if (role === `Engineer`) {
            const engineerCard = generateEngineer(employee);

            teamArray.push(engineerCard);
        }

        if (role === `Intern`) {
            const internCard = generateIntern(employee);

            teamArray.push(internCard);
        }
    }

    const employeeList = teamArray.join('')

    const createTeam = createTeamPage (employeeList);
    return createTeam

};

//Generate page HTML using employee card array

//Export to index
module.exports = generateHTML;