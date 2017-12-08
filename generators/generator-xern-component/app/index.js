'use strict';

var yeoman = require('yeoman-generator'),
  yosay = require('yosay');

module.exports = yeoman.extend({
  constructor: function() {
    yeoman.apply(this, arguments);

    this.option('quick', {
      desc: 'Make a component, nothing else.',
      type: Boolean
    });
  },
  prompting: function() {
    let done = this.async();
    let prompts = {
      cName: {
        type: 'input',
        name: 'cName',
        message: 'name: xern-'
      },
      cVersion: {
        type: 'input',
        name: 'cVersion',
        message: 'version: ',
        default: '0.0.1'
      },
      cDescription: {
        type: 'input',
        name: 'cDescription',
        message: 'description: '
      },
      cAuthor: {
        type: 'input',
        name: 'cAuthor',
        message: 'author: '
      }
    };

    if (!this.options['skip']) {
      console.log(yosay("Let's make a new XERN component."));
      prompts = [
        prompts['cName'],
        prompts['cVersion'],
        prompts['cDescription'],
        prompts['cAuthor']
      ];
    } else {
      prompts = [prompts['cName'], prompts['cDescription'], prompts['cAuthor']];
    }

    this.prompt(prompts).then(answers => {
      this.cName = answers.cName;
      this.cFull = 'xern-' + this.cName;
      this.cVersion = this.options['quick'] ? '0.0.1' : answers.cVersion;
      this.cDescription = answers.cDescription;
      this.cAuthor = answers.cAuthor;
      done();
    });
  },
  validation: function() {
    let cName = this.cName,
      cAuthor = this.cAuthor;

    if (!cName || cName.length <= 0) {
      console.log(yosay('You must specify a component name.'));
      process.exit();
    }

    if (!cAuthor || cAuthor.length <= 0) {
      console.log(yosay('You must specify a component author.'));
      process.exit();
    }
  },
  writing: function() {
    let files = ['package.json', '_styles.scss', 'main.js', 'template.jsx'];

    for (let file of files) {
      this.fs.copyTpl(this.templatePath(file), this.destinationPath(`${this.cFull}/${file}`), {
        name: this.cName,
        fullname: this.cFull,
        version: this.cVersion,
        description: this.cDescription,
        author: this.cAuthor
      });
    }
  },
  end: function() {
    console.log('XERN component [' + this.cFull + '] done.');
  }
});
