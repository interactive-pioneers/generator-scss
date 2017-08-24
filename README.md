# generator-pioneerscss [![Build Status](https://secure.travis-ci.org/interactive-pioneers/generator-pioneerscss.svg?branch=master)](http://travis-ci.org/interactive-pioneers/generator-pioneerscss) [![npm version](https://badge.fury.io/js/generator-pioneerscss.svg)](http://badge.fury.io/js/generator-pioneerscss)

[Yeoman](http://yeoman.io) generator that scaffolds SCSS layout for front-end applications.


## Requirements

- Node.js `^7.0.0`
- [Yeoman](http://yeoman.io)


## Getting Started

1. Install Yeoman and SCSS generator:

        $ npm i -g yo generator-pioneerscss

2. Move to folder in which SCSS structure should be created at, e.g.:

        $ cd ~/projects/my-app/styles

3. Scaffold structure by running:

        $ yo pioneerscss


## typical usage

Grunt task for [grunt-sass](https://github.com/sindresorhus/grunt-sass):
```
sass: {
  options: {
    outputStyle: 'expanded',
    includePaths: ['node_modules'],
    sourceMap: false
  },
  dist: {
    files: {
      '<%= config.dist %>/assets/css/styles.css': '<%= config.src %>/assets/css/styles.scss'
    }
  }
}
```


## Licence

Copyright © 2017 Interactive Pioneers GmbH. Licenced under [GPL-3](LICENSE).
