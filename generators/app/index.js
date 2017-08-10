var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    config() {
        //config files
        this.fs.copyTpl(this.templatePath('_package.json'), this.destinationPath('package.json'));
        this.fs.copyTpl(this.templatePath('_gitignore'), this.destinationPath('.gitignore'));
    }

    app() {        
        //app files
        this.fs.copyTpl(this.templatePath('src/**'), this.destinationPath('src'));
    }

    install() {
        this.npmInstall();
    }
};
