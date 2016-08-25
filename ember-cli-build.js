/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    cssModules: {
      plugins: [
        require('postcss-import'),
        require('postcss-cssnext'),
        require('postcss-nested')
      ],
      // Emit a combined SCSS file for ember-cli-sass to compile
      intermediateOutputPath: 'app/styles/app.scss',
      // Use .scss as the extension for CSS modules instead of the default .css
      extension: 'scss',
      // Pass a custom parser/stringifyer through to PostCSS for processing modules
      postcssOptions: {
        syntax: require('postcss-scss')
      }
    }
  });

  return app.toTree();
};
