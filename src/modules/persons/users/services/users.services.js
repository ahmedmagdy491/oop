const PersonModel = require('../../commons/person.model');
const Person = require('../../commons/person.common');

class User extends Person {
	constructor(req, res) {
		super(req, res);
	}
	async add() {
		await PersonModel.create(this.req.body)
			.then((response) => this.res.json(`${response.name} is created`))
			.catch((err) => this.ErrorHandler({ error: err, res: this.res }));
	}
	async get() {
		await PersonModel.find({ role: 'user' })
			.select('name role')
			.then((response) => this.res.json(response))
			.catch(() => this.ErrorHandler({ error: err, res: this.res }));
	}
}

module.exports = User;
