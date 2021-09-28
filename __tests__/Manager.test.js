const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Coffice number via constructor argument", () => {
  const runTest = 100;
  const man = new Manager("Tim", 1, "test@test.com", runTest);
  expect(man.officeNumber).toEqual(runTest);
});

test("getRole() return \"Manager\"", () => {
  const runTest = "Manager";
  const man = new Manager("Tim", 1, "test@test.com", 100);
  expect(man.getRole()).toEqual(runTest);
});

test("office number via getOffice()", () => {
  const runTest = 100;
  const man = new Manager("Tim", 1, "test@test.com", runTest);
  expect(man.getOfficeNumber()).toEqual(runTest);
});
