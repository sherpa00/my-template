
import sum from "../../sum";

// temp test for sum function
describe("UNIT TEST FOR SUM FUNCTION", () => {

    it("Should return 2 for sum  of 1 and 1", () => {
        const result: number = sum(1,1);
        expect(result).toBeDefined();
        expect(result).toBe(2);
    });
});