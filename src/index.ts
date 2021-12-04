import SonarSweep from "./day1.1/sonar-sweep";

( async () => {
    const instance = new SonarSweep();
    const count    = await instance.getCount("assets/day1/input.txt");
    console.log(`The number of times a depth measurement increases is ${ count }`);
} )();
