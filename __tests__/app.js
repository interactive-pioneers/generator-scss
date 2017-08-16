'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-pioneerscss:app', () => {
  describe('with IP SCSS', () => {
    beforeAll(() => {
      return helpers.run(path.join(__dirname, '../generators/app'));
    });

    it('creates entry point', () => {
      assert.file([
        'styles.scss'
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
        'objects/_aspect.scss',
        'objects/_layout.scss',
        'objects/_picturefill-bg.scss'
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
        'trumps/_helper.scss',
        'trumps/_widths-responsive.scss',
        'trumps/_widths.scss'
      ]);
    });
  });
});
