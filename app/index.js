'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var VanillajsGenerator = yeoman.generators.Base.extend({
    init: function() {
        this.pkg = require('../package.json');

        this.on('end', function() {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

    askFor: function() {
        var done = this.async();
        var compass = this.compass;
        var cb = this.async();

        // Have Yeoman greet the user.
        this.log(yosay('Yo VanillaJS - let\'s kick it!'));

        var prompts = [{
            type: 'confirm',
            name: 'bootstrap',
            message: 'Alright stop - and collaborate with Bootstrap?',
            default: true
        }, {
            type: 'confirm',
            name: 'compassBootstrap',
            message: 'Would you like to use the Sass version of Bootstrap?',
            default: true,
            when: function(props) {
                return props.bootstrap && compass;
            }
        }];

        this.prompt(prompts, function(props) {
            this.bootstrap = props.bootstrap;
            this.compassBootstrap = props.compassBootstrap;

            done();
        }.bind(this));
    },

    app: function() {
        this.mkdir('app');
        this.mkdir('app/scripts');

        this.copy('_package.json', 'package.json');
        this.copy('.gitignore', '.gitignore');
        this.copy('.bowerrc', '.bowerrc');
        this.copy('_bower.json', 'bower.json');
        this.copy('_Gruntfile.js', 'Gruntfile.js');

        this.copy('common/index.html', 'app/index.html');
        this.copy('common/scripts/main.js', 'app/scripts/main.js');
        this.copy('common/scripts/simpleclass.js', 'app/scripts/simpleclass.js');
    },

    projectfiles: function() {
        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');
    }
});

module.exports = VanillajsGenerator;