'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    this.fs.copy(
      this.templatePath('src/**/*.scss'),
      this.destinationPath()
    );
    this.fs.copy(
      this.templatePath('src/components/.gitkeep'),
      this.destinationPath('components/.gitkeep')
    );
  }
  install() {
    this.npmInstall(['normalize-scss'], {'save-dev': true});
  }
};
