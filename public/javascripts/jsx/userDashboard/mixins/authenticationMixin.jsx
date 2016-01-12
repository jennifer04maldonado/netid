var CookieMixin = require('./cookieMixin');

//Mixins are used to extend components. Commonly created to be shared between components
//TODO: use tokens
var AuthenticationMixin = {		
	
	getDefaultProps: function() {
		return {
		      isAuthenticated: "isAuthenticated"
			}      
	},	
	mixins: [CookieMixin],
	
 	authenticateUser: function (username, password, done) {
    	var self = this;
		$.get( ".././json_files/data/netid-account/personas/user.json", function( user, status ) {
			if (status == 'success') {	
				console.log(user.userId + ":" + user.password);
				console.log(username + ":" + password);
				var expireDays = 1;
	 			if ((user.userId == username) && (user.password == password)) {
	 				self.setCookie("username", username, expireDays);
	 				self.setCookie("password", password, expireDays);
	 				self.setCookie(self.props.isAuthenticated, true, expireDays);
	 				//TODO: set cookie and session
	 				done(true);
	 			} else {	 				
					self.setCookieToExpire(self.props.isAuthenticated);
	 				done(false);
	 			}				
			}
			
		});		
	},
	logOut: function () {		                
		this.setCookieToExpire(this.props.isAuthenticated);
		window.location.href = "/";
	},
	isLoggedIn:function() {
		var isAuthenticated = this.getCookie(this.props.isAuthenticated);		
	    if (isAuthenticated) {
	    	return true;
	    } else {		
	    	return false;	    	
	    }
	}
};
module.exports = AuthenticationMixin;
