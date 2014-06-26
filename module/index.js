'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var ModuleGenerator = yeoman.generators.NamedBase.extend({
    init: function() {
        this.conflicter.force = true
    },

    files: function() {
        this.classname = this.name.replace(/[^a-zA-Z0-9]/g, "")
        this.copy('_module.js', 'app/scripts/modules/' + this.classname + '.js');

        var hook = '<!-- End VanillaJS Modules -->',
            path = 'app/index.html',
            file = this.readFileAsString(path),
            insert = '<script src="scripts/modules/' + this.classname + '.js"></script>';

        if (file.indexOf(insert) === -1) {
            this.write(path, file.replace(hook, insert + '\n\t\t' + hook));
        }

        path = 'tests/index.html',
        file = this.readFileAsString(path),
        insert = '<script src="scripts/modules/' + this.classname + '.js"></script>';

        if (file.indexOf(insert) === -1) {
            this.write(path, file.replace(hook, insert + '\n\t' + hook));
        }


    }
});

module.exports = ModuleGenerator;