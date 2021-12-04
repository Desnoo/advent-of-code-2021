import fs from "fs";

/**
 * The text of the file as number array.
 * @param path
 * @returns The number array
 * @throws Error Entry of file is not a number.
 */
export function getFileData(path: string): number[] {
    const data = fs.readFileSync(path, "utf8").split("\n");
    return data
        .filter(entry => !!entry && !Number.isNaN(entry))
        .map(entry => {
            return Number.parseInt(entry, 10);
        });
}
