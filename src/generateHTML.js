//Divs for employee cards:

//Manager
const generateManager = function (manager) {
    return `<div class="col-sm-12 col-md-6 col-lg-4 mt-4">
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
    return `<div class="col-sm-12 col-md-6 col-lg-4 mt-4">
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
    return `<div class="col-sm-12 col-md-6 col-lg-4 mt-4">
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

    const createTeam = createTeamPage(employeeList);
    return createTeam

};

//Generate page HTML using employee card array
const createTeamPage = function (employeeList) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team Profile</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/86b96879d2.js" crossorigin="anonymous"></script>
</head>

<body>
    <header>
        <nav class="navbar" id="navbar">
            <span class="mb-0 h1 w-100 text-center" id="navbar-text">My Team</span>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center">
                ${employeeList}
            </div>
        </div>
    </main>
</body>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
    integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
    crossorigin="anonymous"></script>
</html>
`;
}

//Export to index
module.exports = generateHTML;