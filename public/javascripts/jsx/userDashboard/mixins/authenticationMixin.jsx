var CookieMixin = require('./cookieMixin');
var NetidAPI = require('../../../libraries/netid-api-wrapper.js')

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
 	authenticateUserIPFS: function (username, password, done) {
    	var self = this;
	    var net = new NetidAPI();
       	var getUser = net.account.getUser();		    		       	
	    net.account.ee.on('user',err => {
	    		var user = net.account.user;
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
	         	done();
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
