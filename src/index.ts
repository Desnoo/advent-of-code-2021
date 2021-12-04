import SonarSweep      from "./day1.1/sonar-sweep";
import { getFileData } from "./utils/file-utils";

( async () => {
    const instance = new SonarSweep();
    const count    = await instance.getCountV1(getFileData("assets/day1/input.txt"));
    console.log(`The number of times a depth measurement increases is ${ count }`);
} )();
