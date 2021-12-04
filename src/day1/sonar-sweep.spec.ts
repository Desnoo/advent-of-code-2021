import SonarSweep      from "./sonar-sweep"
import { getFileData } from "../utils/file-utils";

describe("day 1", () => {
    test("example getCountV1", async () => {
        const ref    = new SonarSweep();
        const result = await ref.getCountV1(getFileData("assets/day1/input-test.txt"));

        expect(result).toEqual(7)
    })

    test("example getSlidingWindowCount", async () => {
        const ref    = new SonarSweep();
        const result = await ref.getSlidingWindowCount(getFileData("assets/day1/input-test.txt"));

        expect(result).toEqual(5)
    })
})
