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

    public async getSlidingWindowCount(entries: number[]): Promise<number> {
        if (entries.length <= 5) {
            return 0;
        }

        let count = 0;

        let window1 = entries.splice(0, 3),
            window2 = window1.slice(1, 3).concat(...entries.splice(0, 1));

        let lastNumber = window1.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

        for (const currentNumber of entries) {
            window2.push(currentNumber);
            window2.splice(0, 1);

            const sum = window2.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
            if (sum > lastNumber) {
                count++;
            }
            lastNumber = sum;
        }

        return count;
    }
}
