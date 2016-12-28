'use strict';
var Generator = require('yeoman-generator');
var fs = require('fs');

module.exports = class extends Generator {
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What\'s the Project name',
                default: 'isomorphism-koa2-react',
                store: true
            }, {
                type: 'input',
                name: 'version',
                message: 'What\'s the Project version',
                default: '1.0.0',
                store: true
            }, {
                type: 'input',
                name: 'description',
                message: 'What\'s the Project description',
                default: 'my description',
                store: true
            }, {
                type: 'input',
                name: 'git_repository',
                message: 'What\'s the Project git repository',
                store: true
            },
            {
                type: 'input',
                name: 'author',
                message: 'What\'s your name',
                default: 'llan',
                store: true
            }
        ]);
    }

    writing() {
        const promptValues = this.config.get('promptValues');
        this.fs.copyTpl(
            this.templatePath('**'),
            this.destinationPath('./'),
            {
                name: promptValues.name,
                author: promptValues.author,
                version: promptValues.version,
                description: promptValues.description,
                git_repository: promptValues['git_repository']
            }
        );
    }

    end() {
        this.yarnInstall();
    }
};
