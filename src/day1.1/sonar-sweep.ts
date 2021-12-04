export default class SonarSweep {

    public async getCountV1(entries: number[]): Promise<number> {
        let lastNumber = Infinity;
        let count      = 0;

        for await (const currentNumber of entries) {
            // console.log("Compare", currentNumber, lastNumber, currentNumber > lastNumber);
            if (currentNumber > lastNumber) {
                count++;
            }
            lastNumber = currentNumber;
        }

        return count;
    }
}
