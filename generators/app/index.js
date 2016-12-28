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
                store: true
            }
        ]);
    }

    writing() {
        const promptValues = this.config.get('promptValues');
        this.fs.copy(
            this.templatePath('**'),
            this.destinationRoot()
        );
        this.fs.copy(
            this.templatePath('.*'),
            this.destinationRoot()
        );
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('./package.json'),
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
        this.log('all copy has been completed, now run yarn install ...');
        this.yarnInstall([],{},()=>{
            this.log(`${this.config.get('promptValues').name} has been completed, now you can run npm start to start this project.`);
        });
    }
};
