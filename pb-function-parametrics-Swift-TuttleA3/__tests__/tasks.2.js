const rewire = require("rewire");

describe('2. `task-2-exponent.js`', () => {
    it("Should return 2 to the power of 2", () => {
        const exponent = rewire('../task-2-exponent.js');
        const exponentFunc = exponent.__get__("exponent");
        expect(exponentFunc(3, 3)).toEqual(27)
    });
    it("Should return 2 to the power of 4", () => {
        const exponent = rewire('../task-2-exponent.js');
        const exponentFunc = exponent.__get__("exponent");
        expect(exponentFunc(3)).toEqual(9)
    });
});