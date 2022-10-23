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
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeNumber}</p>
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
            <p class="id">ID: 1985</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
            </p>
            <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a>
            </p>
        </div>
    </div>
</div> `;
};
//Intern
const generateIntern = function (intern) {
    return ` `;
};



//Push employee html cards into array.
generateHTML = (data) => {

};

//Generate page HTML using employee card array

//Export to index
module.exports = generateHTML;