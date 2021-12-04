import { getFileData } from "./file-utils";

describe("FileUtils", () => {
    test("read files with correct length", async () => {
        const result = getFileData("assets/utils/input-test.txt");

        expect(result).toBeDefined();
        expect(result.length).toEqual(10);
    })
})
