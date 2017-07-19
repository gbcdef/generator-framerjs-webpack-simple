'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');

module.exports = class extends Generator {
    prompting() {
        this.log(yosay(
            'Welcome to the ' + chalk.red('generator-framerjs-webpack-simple') + ' generator!'
        ));

        // const prompts = [{
        //         type: 'confirm',
        //         name: 'someAnswer',
        //         message: 'Would you like to enable this option?',
        //         default: true
        //     },
        //     {
        //         type: 'input',
        //         name: 'name',
        //         message: 'Your project name',
        //         default: this.appname
        //     }
        // ];

        // return this.prompt(prompts).then(props => {
        //     this.props = props;
        // });
    }

    writing() {
        this.fs.copy(
            this.templatePath('src'),
            this.destinationPath('src')
        );
        this.fs.copy(
            this.templatePath('static'),
            this.destinationPath('static')
        );
        this.fs.copy(
            this.templatePath('.babelrc'),
            this.destinationPath('.babelrc')
        );
        this.fs.copy(
            this.templatePath('index.html'),
            this.destinationPath('index.html')
        );
        this.fs.copy(
            this.templatePath('webpack.config.js'),
            this.destinationPath('webpack.config.js')
        );
        this.fs.copy(
            this.templatePath('.gitignore'),
            this.destinationPath('.gitignore')
        );
        this.fs.copy(
            this.templatePath('_package.json'),
            this.destinationPath('package.json')
        )
    }

    install() {
        this.installDependencies();
    }
};