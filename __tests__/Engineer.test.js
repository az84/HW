const Engineer = require("../lib/Engineer");

test("Setting GitHUb account via constructor", () => {
  const runTest = "GitHubUser";
  const eng = new Engineer("hello", 1, "test@test.com", runTest);
  expect(eng.github).toEqual(testValue);
});

test("getRole() return \"Engineer\"", () => {
  const runTest = "Engineer";
  const eng = new Engineer("hello", 1, "test@test.com", "GitHubUser");
  expect(eng.getRole()).toEqual(runTest);
});

test("GitHub username via getGithub()", () => {
  const runTest = "GitHubUser";
  const eng = new Engineer("hello", 1, "test@test.com", runTest);
  expect(eng.getGithub()).toEqual(runTest);
});
