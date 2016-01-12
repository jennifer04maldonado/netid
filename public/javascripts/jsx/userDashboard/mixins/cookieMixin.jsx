//Mixins are used to extend components. Commonly created to be shared between components
//TODO: to be more secure we'll have to use tokens
var CookieMixin = {		
	//TODO: use tokens instead	
 	setCookie: function (name, value, days) {
	    var now = new Date();
	    now.setTime(now.getTime() + (days*24*60*60*1000));
	    var expires = "expires="+now.toUTCString();
	    document.cookie = name + "=" + value + "; " + expires;	    
	},
	getCookie: function(name) {
	    var name;
	    name += "=";
	    var cookieArray = document.cookie.split(';');
	    for(var i=0; i<cookieArray.length; i++) {
	        var cookie = cookieArray[i];
	        while (cookie.charAt(0)==' ') cookie = cookie.substring(1);
	        if (cookie.indexOf(name) == 0) {
	        	var cookieFound = cookie.substring(name.length, cookie.length);
	        	return cookieFound;
	        }
	    }
	    return "";
	},	
	//used to clear cookies
 	setCookieToExpire: function (name) {
	    var now = new Date();
	    now.setTime(now.getTime() + (-1*24*60*60*1000));
	    var expires = "expires="+now.toUTCString();
	    document.cookie = name + "=" + "blbal" + "; " + expires;	    
	}
};
module.exports = CookieMixin;
