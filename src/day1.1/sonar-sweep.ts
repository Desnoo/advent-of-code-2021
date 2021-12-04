import * as fs       from "fs";
import * as readline from "readline";

export default class SonarSweep {

    public async getCount(): Promise<number> {

        const fileStream = fs.createReadStream("assets/day1/input.txt", "utf8");
        const rl         = readline.createInterface({
                                                        input:     fileStream,
                                                        crlfDelay: Infinity
                                                    });

        let lastNumber = Infinity;
        let count      = 0;
        for await (const line of rl) {
            if (Number.isNaN(line)) {
                console.log("Input line is not valid", line);
                continue;
            }
            const currentNumber = Number.parseInt(line, 10);
            // console.log("Compare", currentNumber, lastNumber, currentNumber > lastNumber);
            if (currentNumber > lastNumber) {
                count++;
            }
            lastNumber = currentNumber;
        }

        return count;
    }
}

( async () => {
    const instance = new SonarSweep();
    const count    = await instance.getCount();
    console.log(`The number of times a depth measurement increases is ${ count }`);
} )();
