
const {linenAction} = require('./action/linenAction.js');
module.exports = {
	async linen_add(lineObj){
		return await new linenAction(this).add(lineObj);
	},
	async linen_delete(_id){
		return await new linenAction(this).delete(_id);
	}
}