#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

//Simple cli based adventure game

class player {
  name: string;
  fuel: number = 100;

  constructor(n: string) {
    this.name = n;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }

  feulIncrease() {
    this.fuel = 100;
  }
}
class oppenent {
  name: string;
  fuel: number = 100;

  constructor(n: string) {
    this.name = n;
  }

  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  feulIncrease() {
    this.fuel = 100;
  }
}

let playerName = await inquirer.prompt([
  {
    name: "p1",
    type: "input",
    message: "Enter your name",
  },
  {
    name: "p2",
    type: "list",
    message: "select your oppenent",
    choices: ["Skeleton", "Assassin", "Zombie"],
  },
]);
let player1 = new player(playerName.p1);
let opp = new oppenent(playerName.p2);
console.log(
  chalk.bold.green(`${player1.name}`) + " VS " + chalk.bold.red(`${opp.name}`)
);

while (true) {
  // Player VS Skeleton
  if (playerName.p2 === "Skeleton") {
    let ask = await inquirer.prompt({
      name: "in",
      type: "list",
      message: "Select what you want to do ?",
      choices: ["Attack", "Drink Portion", "Run for your life"],
    });
    if (ask.in === "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        player1.fuelDecrease();
        console.log(
          chalk.bold.green(`${player1.name} fuel is ${player1.fuel}`)
        );
        console.log(chalk.bold.red(`${opp.name} fuel is ${opp.fuel}.`));
        if (player1.fuel <= 0) {
          console.log(chalk.bold.red("You loose, Better Luck Next Time!"));
          process.exit();
        }
      } else if (num <= 0) {
        opp.fuelDecrease();
        console.log(
          chalk.bold.green(`${player1.name} fuel is ${player1.fuel}.`)
        );
        console.log(chalk.bold.red(`${opp.name} fuel is ${opp.fuel}.`));
        if (opp.fuel <= 0) {
          console.log(chalk.italic.blue("You win this game!"));
          process.exit();
        }
      }
    } else if (ask.in === "Drink Portion") {
      player1.feulIncrease();
      console.log(
        chalk.yellow.blue("You Drink Health Portion Your fuel is"),
        chalk.bold.yellow(`${player1.fuel}.`)
      );
    } else if (ask.in === "Run for your life") {
      console.log(chalk.bold.cyanBright("You ran From Fighting For your Life"));
      process.exit();
    }
  }
  // Player VS Assassin
  else if (playerName.p2 === "Assassin") {
    let ask = await inquirer.prompt({
      name: "in",
      type: "list",
      message: "Select what you want to do ?",
      choices: ["Attack", "Drink Portion", "Run for your life"],
    });
    if (ask.in === "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        player1.fuelDecrease();
        console.log(
          chalk.bold.green(`${player1.name} fuel is ${player1.fuel}`)
        );
        console.log(chalk.bold.red(`${opp.name} fuel is ${opp.fuel}.`));
        if (player1.fuel <= 0) {
          console.log(chalk.bold.red("You loose, Better Luck Next Time!"));
          process.exit();
        }
      } else if (num <= 0) {
        opp.fuelDecrease();
        console.log(
          chalk.bold.green(`${player1.name} fuel is ${player1.fuel}.`)
        );
        console.log(chalk.bold.red(`${opp.name} fuel is ${opp.fuel}.`));
        if (opp.fuel <= 0) {
          console.log(chalk.italic.blue("You win this game!"));
          process.exit();
        }
      }
    } else if (ask.in === "Drink Portion") {
      player1.feulIncrease();
      console.log(
        chalk.yellow.blue("You Drink Health Portion Your fuel is"),
        chalk.bold.yellow(`${player1.fuel}.`)
      );
    } else if (ask.in === "Run for your life") {
      console.log(chalk.bold.cyanBright("You ran From Fighting For your Life"));
      process.exit();
    }
  }
  // Player VS Zombie
  else if (playerName.p2 === "Zombie") {
    let ask = await inquirer.prompt({
      name: "in",
      type: "list",
      message: "Select what you want to do ?",
      choices: ["Attack", "Drink Portion", "Run for your life"],
    });
    if (ask.in === "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        player1.fuelDecrease();
        console.log(
          chalk.bold.green(`${player1.name} fuel is ${player1.fuel}`)
        );
        console.log(chalk.bold.red(`${opp.name} fuel is ${opp.fuel}.`));
        if (player1.fuel <= 0) {
          console.log(chalk.bold.red("You loose, Better Luck Next Time!"));
          process.exit();
        }
      } else if (num <= 0) {
        opp.fuelDecrease();
        console.log(
          chalk.bold.green(`${player1.name} fuel is ${player1.fuel}.`)
        );
        console.log(chalk.bold.red(`${opp.name} fuel is ${opp.fuel}.`));
        if (opp.fuel <= 0) {
          console.log(chalk.italic.blue("You win this game!"));
          process.exit();
        }
      }
    } else if (ask.in === "Drink Portion") {
      player1.feulIncrease();
      console.log(
        chalk.yellow.blue("You Drink Health Portion Your fuel is"),
        chalk.bold.yellow(`${player1.fuel}.`)
      );
    } else if (ask.in === "Run for your life") {
      console.log(chalk.bold.cyanBright("You ran From Fighting For your Life"));
      process.exit();
    }
  }
}
