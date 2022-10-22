//Intern test using intern constructor
const Intern = require(`../lib/Intern`);

test(`creates an intern object`, () => {
    const intern = new Intern(`Robert`, 85, 'da.bruce.jr@gmail.com', 'NAU');

    expect(intern.school).toEqual(expect.any(String));
});

//Test getSchool()
test(`gets employee school`, () => {
    const intern = new Intern(`Robert`, 85, 'da.bruce.jr@gmail.com', 'NAU');

    expect(intern.school()).toEqual(expect.stringContaining(intern.school.toString()));
});

//Test getRole()
test(`gets role of employee`, () => {
    const intern = new Intern(`Robert`, 85, 'da.bruce.jr@gmail.com', 'NAU');

    expect(intern.getRole()).toEqual("Intern");

});