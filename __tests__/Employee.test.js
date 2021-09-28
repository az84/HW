const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Employee instance", () => {
        const emp = new Employee();
        expect(typeof(emp)).toEqual("object");
    });

    it("name via constructor function", () => {
        const name = "Tim";
        const emp = new Employee(name);
        expect(emp.name).toEqual(name);
    });

    it("id via constructor function", () => {
        const testValue = 100;
        const e = new Employee("Tim", testValue);
        expect(e.id).toEqual(testValue);
    });

    it("Can set email via constructor argument", () => {
        const testValue = "test@test.com";
        const emp = new Employee("Tim", 1, testValue);
        expect(emp.email).toEqual(testValue);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const testValue = "Mark";
            const emp = new Employee(testValue);
            expect(emp.getName()).toEqual(testValue);
        });
    });
        
    describe("getId", () => {
        it("id via getId()", () => {
            const runTest = 100;
            const emp = new Employee("Foo", runTest);
            expect(emp.getId()).toEqual(runTest);
        });
    });
        
    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const runTest = "test@test.com";
            const emp = new Employee("Foo", 1, runTest);
            expect(emp.getEmail()).toEqual(runTest);
        });
    });
        
    describe("getRole", () => {
        it("getRole() return \"Employee\"", () => {
            const runTest = "Employee";
            const emp = new Employee("Tim", 1, "test@test.com");
            expect(emp.getRole()).toEqual(runTest);
        });
    });
    
});
