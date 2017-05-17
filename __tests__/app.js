'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-pioneerscss:app', () => {
  describe('with IP SCSS', () => {
    beforeAll(() => {
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withPrompts({ipScss: true});
    });

    it('creates entry point', () => {
      assert.file([
        'styles.scss'
      ]);
    });

    it('creates entry point content', () => {
      assert.fileContent([
        ['styles.scss', '@import \'settings/breakpoints\';'],
        ['styles.scss', '@import \'settings/colours\';'],
        ['styles.scss', '@import \'settings/easing\';'],
        ['styles.scss', '@import \'settings/fonts\';'],
        ['styles.scss', '@import \'settings/layout\';'],
        ['styles.scss', '@import \'tools/font-size\';'],
        ['styles.scss', '@import \'tools/math\';'],
        ['styles.scss', '@import \'tools/media-queries\';'],
        ['styles.scss', '@import \'tools/shapes\';'],
        ['styles.scss', '@import \'tools/widths\';'],
        ['styles.scss', '//@import \'{path_to_bower_components}/normalize-css/normalize\';'],
        ['styles.scss', '@import \'base/media\';'],
        ['styles.scss', '@import \'base/page\';'],
        ['styles.scss', '@import \'generic/box-sizing\';'],
        ['styles.scss', '@import \'generic/font-smoothing\';'],
        ['styles.scss', '@import \'generic/helper\';'],
        ['styles.scss', '@import \'generic/layout\';'],
        ['styles.scss', '@import \'generic/smooth-scrolling\';'],
        ['styles.scss', '@import \'objects/layout\';'],
        ['styles.scss', '@import \'objects/picturefill-bg\';'],
        ['styles.scss', '@import \'objects/responsive-video\';'],
        ['styles.scss', '@import \'objects/square\';'],
        ['styles.scss', '//@import \'components/\';'],
        ['styles.scss', '@import \'trumps/clearfix\';'],
        ['styles.scss', '@import \'trumps/visibility\';'],
        ['styles.scss', '@import \'trumps/widths-responsive\';'],
        ['styles.scss', '@import \'trumps/widths\';']
      ]);
    });

    it('creates base', () => {
      assert.file([
        'base/_media.scss',
        'base/_page.scss'
      ]);
    });

    it('creates components', () => {
      assert.file([
        'components/.gitkeep'
      ]);
    });

    it('creates generic', () => {
      assert.file([
        'generic/_box-sizing.scss'
      ]);
    });

    it('creates objects', () => {
      assert.file([
        'objects/_layout.scss',
        'objects/_picturefill-bg.scss',
        'objects/_responsive-video.scss',
        'objects/_square.scss'
      ]);
    });

    it('creates settings', () => {
      assert.file([
        'settings/_breakpoints.scss',
        'settings/_colours.scss',
        'settings/_easing.scss',
        'settings/_fonts.scss',
        'settings/_layout.scss'
      ]);
    });

    it('creates tools', () => {
      assert.file([
        'tools/_font-size.scss',
        'tools/_math.scss',
        'tools/_media-queries.scss',
        'tools/_shapes.scss',
        'tools/_widths.scss'
      ]);
    });

    it('creates trumps', () => {
      assert.file([
        'trumps/_clearfix.scss',
        'trumps/_visibility.scss',
        'trumps/_widths-responsive.scss',
        'trumps/_widths.scss'
      ]);
    });
  });

  describe('without IP SCSS', () => {
    beforeAll(() => {
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withPrompts({ipScss: false});
    });

    it('creates entry point', () => {
      assert.file([
        'styles.scss'
      ]);
    });

    it('creates entry point content', () => {
      assert.fileContent([
        ['styles.scss', '//@import \'settings/\';'],
        ['styles.scss', '//@import \'tools/\';'],
        ['styles.scss', '//@import \'{path_to_bower_components}/normalize-css/normalize\';'],
        ['styles.scss', '//@import \'base/\';'],
        ['styles.scss', '//@import \'generic/\';'],
        ['styles.scss', '//@import \'objects/\';'],
        ['styles.scss', '//@import \'components/\';'],
        ['styles.scss', '//@import \'trumps/\';']
      ]);
    });

    it('creates base', () => {
      assert.file([
        'base/.gitkeep'
      ]);
    });

    it('creates components', () => {
      assert.file([
        'components/.gitkeep'
      ]);
    });

    it('creates generic', () => {
      assert.file([
        'generic/.gitkeep'
      ]);
    });

    it('creates objects', () => {
      assert.file([
        'objects/.gitkeep'
      ]);
    });

    it('creates settings', () => {
      assert.file([
        'settings/.gitkeep'
      ]);
    });

    it('creates tools', () => {
      assert.file([
        'tools/.gitkeep'
      ]);
    });

    it('creates trumps', () => {
      assert.file([
        'trumps/.gitkeep'
      ]);
    });
  });
});
