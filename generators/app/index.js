"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the premium ${chalk.red(
          "generator-nestjs-boilerplate"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "confirm",
        name: "someAnswer",
        message: "Would you like to enable this option?",
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath(".gitignore"),
      this.destinationPath(".gitignore")
    );
    this.fs.copy(
      this.templatePath("nest-cli.json"),
      this.destinationPath("nest-cli.json")
    );
    this.fs.copy(
      this.templatePath("tsconfig.build.json"),
      this.destinationPath("tsconfig.build.json")
    );
    this.fs.copy(
      this.templatePath("package.json"),
      this.destinationPath("package.json")
    );
    this.fs.copy(
      this.templatePath("README.md"),
      this.destinationPath("README.md")
    );
    this.fs.copy(
      this.templatePath("tsconfig.json"),
      this.destinationPath("tsconfig.json")
    );
    this.fs.copy(
      this.templatePath("yarn.lock"),
      this.destinationPath("yarn.lock")
    );
    this.fs.copy(this.templatePath("dist"), this.destinationPath("dist"));
    this.fs.copy(this.templatePath("src"), this.destinationPath("src"));
    this.fs.copy(this.templatePath("test"), this.destinationPath("test"));
  }

  end() {
    this.log(" ");
    this.log("Finished generating!");
    this.log(" ");
  }
};
