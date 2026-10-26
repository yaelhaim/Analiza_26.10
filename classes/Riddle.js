// The Riddle class. Export it as the default export.
//
// Properties (received in the constructor):
// - id
// - name
// - taskDescription
// - correctAnswer
//
// Method:
// - ask(prompt)
//   - show the riddle (name and taskDescription) to the player
//   - ask the player for an answer using the `prompt` function that is passed in
//   - keep asking until the answer is correct
export default class Riddle {
    constructor(details) {
        this.id = details.id;
        this.name = details.name;
        this.taskDescription = details.taskDescription;
        this.correctAnswer = details.correctAnswer;
    }
    ask(prompt) {
        console.log(`name: ${this.name} task description: ${this.taskDescription}`);
        let answer = prompt("your answer: ");
        while (answer !== this.correctAnswer) {
            console.log("Wrong answer! Try again");
            answer = prompt("Your answer: ");
        }
        console.log("Correct answer!");
    }
}