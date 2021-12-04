import SonarSweep from "./sonar-sweep"

describe("day 1", () => {
    test("example", async () => {
        const inst = new SonarSweep();
        const result = await inst.getCount("assets/day1/input-test.txt");

        expect(result).toEqual(7)
    })
})
