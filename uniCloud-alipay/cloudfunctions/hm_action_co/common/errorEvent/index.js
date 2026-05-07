//const j = [{code:"9999","token无效"}]
module.exports = {
	
	getTokenError(msg="token无效"){
		return {code:9999,msg:msg}
	}
	
}
