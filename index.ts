import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.yellow("=".repeat(70)));
console.log(chalk.bold.bgCyanBright("\n \t\tWelcome to our Word Counter Application\n"));
console.log(chalk.bold.yellow("=".repeat(70)));


let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.bold.bgBlueBright("\nEnter a sentence: \n")

    }
]);

 let words = answer.sentence.trim().split(" ");


console.log(chalk.bold.bgGreenBright("\n \t\t- Your Sentence -\n"));
console.log(words);
console.log(`\n  - Total Words Count - ${chalk.bold.yellow(words.length)}`);
console.log(chalk.bold.green("\n \t\t            <================================>\n"));

