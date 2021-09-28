const Intern = require("../lib/Intern");

test("school via constructor", () => {
  const runTest = "Upenn";
  const int = new Intern("Tim", 1, "test@test.com", runTest);
  expect(int.school).toEqual(runTest);
});

test("getRole() should return \"Intern\"", () => {
  const runTest = "Intern";
  const int = new Intern("Tim", 1, "test@test.com", "Upenn");
  expect(int.getRole()).toEqual(runTest);
});

test("school via getSchool()", () => {
  const runTest = "Upenn";
  const int = new Intern("Tim", 1, "test@test.com", runTest);
  expect(int.getSchool()).toEqual(runTest);
});
