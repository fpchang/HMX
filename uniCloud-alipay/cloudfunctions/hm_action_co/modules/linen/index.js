
const {linenAction} = require('./action/linenAction.js');
module.exports = {
	async linen_add(lineObj){
		return await new linenAction(this).add(lineObj);
	},
	async linen_edit(lineObj){
		return await new linenAction(this).edit(lineObj);
	},
	
	async linen_lock(_id){
		console.log("000000")
		return await new linenAction(this).lock(_id);
	},
	async linen_delete(_id){
		return await new linenAction(this).delete(_id);
	}
}