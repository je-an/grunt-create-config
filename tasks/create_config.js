/*
 * grunt-create-config
 * https://github.com/jerem/grunt-create-config
 *
 * Copyright (c) 2017 je-an
 * Licensed under the MIT license.
 */

'use strict';
var extend = require("jquery-extend");
var jquery = require("jquery");
module.exports = function (grunt) {
  var config, source, target;

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('create_config_before', 'The best Grunt plugin ever.', function () {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({});

    source = options.configPath + "/" + options.name;

    config = grunt.file.readJSON(source);
    var d = extend(true, {}, config, options.replacement);
    grunt.file.write(source, JSON.stringify(d, null, 4));
  });

  grunt.registerMultiTask('create_config_after', 'The best Grunt plugin ever.', function () {
    grunt.file.write(source, JSON.stringify(config, null, 4));
  });
};
