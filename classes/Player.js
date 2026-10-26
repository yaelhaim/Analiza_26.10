// The Player class. Export it as the default export.
//
// Properties:
// - name
// - times (an array that holds the time it took to solve each riddle)
//
// Methods:
// - recordTime(start, end)
//   - calculate the duration (end - start) and add it to the times array
// - showStats()
//   - show the total time and the average time per riddle
export default class Player {
    constructor(name) {
        this.name = name;
        this.times = [];
    }
    recordTime(start, end) {
        let time = (end - start) / 1000;
        this.times.push(time);
    }
    showStats() {
        let totalTime = this.times.reduce((sum, time) => sum + time, 0);
        let averageTime = 0;
        if (this.times.length > 0) {
            averageTime = totalTime / this.times.length;
        } else {
            averageTime = 0;
        }
        console.log(`Total time: ${totalTime} sc `);
        console.log(`Average time: ${averageTime}  sc`);
    }
}