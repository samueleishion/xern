'use strict';

var yeoman = require('yeoman-generator'),
	yosay = require('yosay');

module.exports = yeoman.extend({
	constructor: function() {
		yeoman.apply(this,arguments);

		this.option('quick', {
			desc: 'Make a module, nothing else.',
			type: Boolean
		});
	},
	prompting: function() {
		let done = this.async();
		let prompts = {
			'mName': {
				type: 'input',
				name: 'mName',
				message: 'name: '
			},
			'mVersion': {
				type: 'input',
				name: 'mVersion',
				message: 'version: ',
				default: '0.0.1'
			},
			'mDescription': {
				type: 'input',
				name: 'mDescription',
				message: 'description: '
			},
			'mAuthor': {
				type: 'input',
				name: 'mAuthor',
				message: 'author: '
			}
		};

		if(!this.options['skip']) {
			console.log(yosay("Let's make a new XERN module."));
			prompts = [
				prompts['mName'],
				prompts['mVersion'],
				prompts['mDescription'],
				prompts['mAuthor']
			];
		} else {
			prompts = [
				prompts['mName'],
				prompts['mDescription'],
				prompts['mAuthor']
			];
		}

		this.prompt(prompts).then((answers) => {
			this.mName = answers.mName;
			this.mVersion = this.options['quick']?'0.0.1':answers.mVersion;
			this.mDescription = answers.mDescription;
			this.mAuthor = answers.mAuthor;
			done();
		});
	},
	validation: function() {
		let mName = this.mName,
			mAuthor = this.mAuthor;

		if(!mName || mName.length<=0) {
			console.log(yosay('You must specify a module name.'));
			process.exit();
		}

		if(!mAuthor || mAuthor.length<=0) {
			console.log(yosay('You must specify a module author.'));
			process.exit();
		}

		this.mNameCamel = mName.split('-').map(item => {
			return item.charAt(0).toUpperCase() + item.slice(1);
		}).join('').split(' ').map(item => {
			return item.charAt(0).toUpperCase() + item.slice(1);
		}).join('');
	},
	writing: function() {
		let files = [
			'package.json',
			'_styles.scss',
			'main.js',
			'template.jsx'
		];

		for(let file of files) {
			this.fs.copyTpl(
				this.templatePath(file),
				this.destinationPath(`${this.mNameCamel}/${file}`),
				{
					name: this.mName,
					fullname: this.mNameCamel,
					version: this.mVersion,
					description: this.mDescription,
					author: this.mAuthor
				});
		}
	},
	end: function() {
		console.log('XERN module ['+this.mNameCamel+'] done.')
	}
});
