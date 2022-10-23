//Engineer test using Engineer constructor 
const Engineer = require(`../lib/Engineer`);

test(`Engineer object is created`, () => {
    const engineer = new Engineer(`Robert`, 85, `da.bruce.jr@gmail.com`, `YogiBruce`);

    expect(engineer.github).toEqual(expect.any(String));
});

//Tests gitHub username from getGithub()
test(`Checks Engineer's GitHub name`, () => {
    const engineer = new Engineer(`Robert`, 85, `da.bruce.jr@gmail.com`, `YogiBruce`);

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

//Tests role from getRole()
test(`Checks employee role`, () => {
    const engineer = new Engineer(`Robert`, 85, `da.bruce.jr@gmail.com`, `YogiBruce`);

    expect(engineer.getRole()).toEqual("Engineer");
});