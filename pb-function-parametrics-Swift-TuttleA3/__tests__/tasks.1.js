const rewire = require("rewire");

describe('1.`task-1-twofer.js`', () => {
    it("Should return Two for me + Argument", () => {
        const twofer = rewire('../task-1-twofer.js');
        const twoferFunc = twofer.__get__("twofer");
        expect(twoferFunc("john")).toEqual(expect.stringMatching(/two for me and one for john/i));
    });
    it("Should return Two for me one for you, if no Arguments passed", () => {
        const twofer = rewire('../task-1-twofer.js');
        const twoferFunc = twofer.__get__("twofer");
        expect(twoferFunc()).toEqual(expect.stringMatching(/Two for me and one for you/i))
    });
});