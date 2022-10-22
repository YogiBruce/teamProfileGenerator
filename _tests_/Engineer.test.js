//Engineer test using Engineer constructor 
const Engineer = require(`../lib/Engineer`);

test(`creates an Engineer object`, () => {
    const engineer = new Engineer(`Robert`, 85, `da.bruce.jr@gmail.com`, `YogiBruce`);

    expect(engineer.github).toEqual(expect.any(String));
});

//Tests gitHub username from getGithub()
test(`gets engineer github username`, () => {
    const engineer = new Engineer(`Robert`, 85, `da.bruce.jr@gmail.com`, `YogiBruce`);

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

//Tests role from getRole()
test(`gets role of employee`, () => {
    const engineer = new Engineer(`Robert`, 85, `da.bruce.jr@gmail.com`, `YogiBruce`);

    expect(engineer.getRole()).toEqual("Engineer");
});