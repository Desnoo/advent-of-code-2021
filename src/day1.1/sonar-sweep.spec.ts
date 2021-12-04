import SonarSweep      from "./sonar-sweep"
import { getFileData } from "../utils/file-utils";

describe("day 1", () => {
    test("example getCountV1", async () => {
        const inst   = new SonarSweep();
        const result = await inst.getCountV1(getFileData("assets/day1/input-test.txt"));

        expect(result).toEqual(7)
    })
})
