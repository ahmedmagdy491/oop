const ErrorHandler = require('../../../Error/error.handler');
const PersonModel = require('./person.model');
class Person {
	constructor(req, res) {
		this.req = req;
		this.res = res;
		this.ErrorHandler = ErrorHandler;
	}

	async deleteOne() {
		await PersonModel.findByIdAndDelete(this.req.params.id)
			.then((response) => this.res.json(`${response.name} deleted`))
			.catch(() => this.ErrorHandler({ error: err, res: this.res }));
	}
	async getOne() {
		await PersonModel.findById(this.req.params.id)
			.then((response) => this.res.json(response))
			.catch((err) => this.ErrorHandler({ error: err, res: this.res }));
	}
	async update() {
		await PersonModel.findByIdAndUpdate(this.req.params.id, this.req.body)
			.then((response) => this.res.json(`${response.name} is updated`))
			.catch((err) => this.ErrorHandler({ error: err, res: this.res }));
	}
}

module.exports = Person;
