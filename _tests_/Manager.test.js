//Manager test using Manager constructor
const Manager = require(`../lib/Manager`);

test(`creates a manager object`, () => {
    const manager = new Manager(`Robert`, 85, `da.bruce.jr@gmail.com`, 23);

    expects(manager.officeNumber).toEqual(expect.any(Number);)
});

//Test getRole()
test(`gets role of employee`, () => {
    const manager = new Manager(`Robert`, 85, `da.bruce.jr@gmail.com`, 23);

    expect(manager.getRole()).toEqual("Manager");
});