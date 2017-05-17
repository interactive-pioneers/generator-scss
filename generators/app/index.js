'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('generator-pioneerscss') + ' generator!'
    ));

    const prompts = [{
      type: 'confirm',
      name: 'ipScss',
      message: 'Would you like to scaffold standard set of SCSS files used at Interactive Pioneers?',
      default: true
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.ipScss;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('src/styles.scss'),
      this.destinationPath('styles.scss')
    );

    this.fs.copy(
      this.templatePath('src/components/.gitkeep'),
      this.destinationPath('components/.gitkeep')
    );

    if (this.props.ipScss) {
      this.fs.copy(
        this.templatePath('src/base/_media.scss'),
        this.destinationPath('base/_media.scss')
      );

      this.fs.copy(
        this.templatePath('src/base/_page.scss'),
        this.destinationPath('base/_page.scss')
      );

      this.fs.copy(
        this.templatePath('src/generic/_box-sizing.scss'),
        this.destinationPath('generic/_box-sizing.scss')
      );

      this.fs.copy(
        this.templatePath('src/generic/_font-smoothing.scss'),
        this.destinationPath('generic/_font-smoothing.scss')
      );

      this.fs.copy(
        this.templatePath('src/generic/_helper.scss'),
        this.destinationPath('generic/_helper.scss')
      );

      this.fs.copy(
        this.templatePath('src/generic/_layout.scss'),
        this.destinationPath('generic/_layout.scss')
      );

      this.fs.copy(
        this.templatePath('src/generic/_smooth-scrolling.scss'),
        this.destinationPath('generic/_smooth-scrolling.scss')
      );

      this.fs.copy(
        this.templatePath('src/objects/_layout.scss'),
        this.destinationPath('objects/_layout.scss')
      );

      this.fs.copy(
        this.templatePath('src/objects/_picturefill-bg.scss'),
        this.destinationPath('objects/_picturefill-bg.scss')
      );

      this.fs.copy(
        this.templatePath('src/objects/_responsive-video.scss'),
        this.destinationPath('objects/_responsive-video.scss')
      );

      this.fs.copy(
        this.templatePath('src/objects/_square.scss'),
        this.destinationPath('objects/_square.scss')
      );

      this.fs.copy(
        this.templatePath('src/settings/_breakpoints.scss'),
        this.destinationPath('settings/_breakpoints.scss')
      );

      this.fs.copy(
        this.templatePath('src/settings/_colours.scss'),
        this.destinationPath('settings/_colours.scss')
      );

      this.fs.copy(
        this.templatePath('src/settings/_easing.scss'),
        this.destinationPath('settings/_easing.scss')
      );

      this.fs.copy(
        this.templatePath('src/settings/_fonts.scss'),
        this.destinationPath('settings/_fonts.scss')
      );

      this.fs.copy(
        this.templatePath('src/settings/_layout.scss'),
        this.destinationPath('settings/_layout.scss')
      );

      this.fs.copy(
        this.templatePath('src/tools/_font-size.scss'),
        this.destinationPath('tools/_font-size.scss')
      );

      this.fs.copy(
        this.templatePath('src/tools/_math.scss'),
        this.destinationPath('tools/_math.scss')
      );

      this.fs.copy(
        this.templatePath('src/tools/_media-queries.scss'),
        this.destinationPath('tools/_media-queries.scss')
      );

      this.fs.copy(
        this.templatePath('src/tools/_shapes.scss'),
        this.destinationPath('tools/_shapes.scss')
      );

      this.fs.copy(
        this.templatePath('src/tools/_widths.scss'),
        this.destinationPath('tools/_widths.scss')
      );

      this.fs.copy(
        this.templatePath('src/trumps/_clearfix.scss'),
        this.destinationPath('trumps/_clearfix.scss')
      );

      this.fs.copy(
        this.templatePath('src/trumps/_visibility.scss'),
        this.destinationPath('trumps/_visibility.scss')
      );

      this.fs.copy(
        this.templatePath('src/trumps/_widths-responsive.scss'),
        this.destinationPath('trumps/_widths-responsive.scss')
      );

      this.fs.copy(
        this.templatePath('src/trumps/_widths.scss'),
        this.destinationPath('trumps/_widths.scss')
      );
    } else {
      this.fs.write(this.destinationPath('base/.gitkeep'), '');
      this.fs.write(this.destinationPath('generic/.gitkeep'), '');
      this.fs.write(this.destinationPath('objects/.gitkeep'), '');
      this.fs.write(this.destinationPath('settings/.gitkeep'), '');
      this.fs.write(this.destinationPath('tools/.gitkeep'), '');
      this.fs.write(this.destinationPath('trumps/.gitkeep'), '');
    }
  }
};
