//Employee test using employee constructor
const Employee = require(`../lib/Employee`)

test(`Employee object is created`, () => {
    const employee = new Employee(`Robert`, 85, `da.bruce.jr@gmail.com`);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//Tests name
test(`Employee has a name`, () => {
    const employee = new Employee(`Robert`, 85, `da.bruce.jr@gmail.com`);

    expect(employee.getName()).toEqual((expect.any(String)));
});

//Tests ID
test(`Employee has id#`, () => {
    const employee = new Employee(`Robert`, 85, `da.bruce.jr@gmail.com`);

    expect(employee.getID()).toEqual(expect.any(Number));
});

//Tests Email
test(`Employee has email address`, () => {
    const employee = new Employee(`Robert`, 85, `da.bruce.jr@gmail.com`);

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//Tests role `Employee`
test(`gets role of employee`, () => {
    const employee = new Employee(`Robert`, 85, `da.bruce.jr@gmail.com`);

    expect(employee.getRole()).toEqual("Employee");

});