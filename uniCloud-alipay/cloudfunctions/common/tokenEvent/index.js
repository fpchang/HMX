const jwt = require('jsonwebtoken');
module.exports = {
	getToken(value,secret,expiresIn){	
		return jwt.sign({value},secret,{expiresIn})
	},
	verifyToken(token,secret){
		try {
			return jwt.verify(token,secret);
		} catch (error) {
			
		}
	},
	getSecret(){
		return "****";
	},
	checkToken(token,secret){
		let vt = this.verifyToken(token,secret);
		if(new Date().getTime()>verifT.exp){
			 		return false;
			 	}
				return true;
	}
}
