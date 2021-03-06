'use strict';
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')
const path = require('path')

module.exports = class extends Generator {
    prompting() {
        this.log(yosay(
            'Welcome to the ' + chalk.green('framerjs-webpack-simple') + ' generator!'
        ))
    }

    writing() {
        this.fs.copy(
            this.templatePath('src'),
            this.destinationPath('src')
        )
        this.fs.copy(
            this.templatePath('static'),
            this.destinationPath('static')
        )
        this.fs.copy(
            this.templatePath('index.html'),
            this.destinationPath('index.html')
        )

        this.fs.copy(
            this.templatePath('webpack.config.js'),
            this.destinationPath('webpack.config.js')
        )
        this.fs.copy(
            this.templatePath('_.gitignore'),
            this.destinationPath('.gitignore')
        )
        this.fs.copy(
            this.templatePath('_.babelrc'),
            this.destinationPath('.babelrc')
        )
        this.fs.copy(
            this.templatePath('_package.json'),
            this.destinationPath('package.json')
        )
    }

    install() {
        this.installDependencies({
          npm: true,
          bower: false
        });
    }
};
