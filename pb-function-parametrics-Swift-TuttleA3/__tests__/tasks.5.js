const rewire = require("rewire");

describe('5. `task-5-average.js`', () => {
    it('Should take any amount of number as Argument and return their average', () => {
        const average = rewire('../task-5-average.js');
        const averageFunc = average.__get__("average");
        expect(averageFunc(0)).toEqual(0)
        expect(averageFunc(1, 2)).toEqual(1.5)
        expect(averageFunc(1, 3, 6, 10)).toEqual(5)
        expect(averageFunc(12, 14, 16)).toEqual(14)
    });
});