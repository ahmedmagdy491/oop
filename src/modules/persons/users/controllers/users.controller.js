const add = async (req) => req.instance_user.add();
const get = async (req) => req.instance_user.get();
const getOne = async (req) => req.instance_user.getOne();
const deleteOne = async (req) => req.instance_user.deleteOne();
const update = async (req) => req.instance_user.update();

module.exports = { add, get, getOne, deleteOne, update };
