'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var ModuleGenerator = yeoman.generators.NamedBase.extend({
    init: function() {
        this.conflicter.force = true
    },

    files: function() {
        this.copy('_module.js', 'app/scripts/modules/' + this.name + '.js');

        var hook = '<script src="scripts/main.js"></script>',
            path = 'app/index.html',
            file = this.readFileAsString(path),
            slug = this.name.toLowerCase().replace(/ /g, '_'),
            insert = '<script src="scripts/' + this.name + '.js"></script>';

        if (file.indexOf(insert) === -1) {
            this.write(path, file.replace(hook, insert + '\n\t\t' + hook));
        }


    }
});

module.exports = ModuleGenerator;