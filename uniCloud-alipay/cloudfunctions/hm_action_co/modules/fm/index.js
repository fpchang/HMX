const {FmAction} = require('./action/FmAction.js');

module.exports = {
	async fm_add(fm){
		return await new FmAction(this).add(fm);
	}
}