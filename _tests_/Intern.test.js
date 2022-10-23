//Intern test using Intern constructor
const Intern = require(`../lib/Intern`);

test(`Intern object is created`, () => {
    const intern = new Intern(`Robert`, 85, 'da.bruce.jr@gmail.com', 'NAU');

    expect(intern.school).toEqual(expect.any(String));
});

//Test getSchool()
test(`Checks intern's school`, () => {
    const intern = new Intern(`Robert`, 85, 'da.bruce.jr@gmail.com', 'NAU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

//Test getRole()
test(`Intern is set as role`, () => {
    const intern = new Intern(`Robert`, 85, 'da.bruce.jr@gmail.com', 'NAU');

    expect(intern.getRole()).toEqual("Intern");

});