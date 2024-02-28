const rewire = require("rewire");

describe('4.`task-4-sum.js`', () => {
    it('Should take any amount of number as Argument and return their sum', () => {
        const sum = rewire('../task-4-sum.js');
        const sumFunc = sum.__get__("sum");
        expect(sumFunc(1)).toEqual(1)
        expect(sumFunc(1, 15)).toEqual(16)
        expect(sumFunc(25, 25, 20)).toEqual(70)
    });
});