var CommunityPostDao = {
	getInitialState: function() {
		return {
			allCommunityPosts: []
			}	
	},	
	componentWillUpdate: function(nextProps, nextState) {		
	 	if (nextState.activePersona !== this.state.activePersona) {
			// if (this.props.useIPFS) {
			// 	this.getAllCommunityPostsIPFS();				
			// } else {
				this.getAllCommunityPosts();
			//}
	  	}

	 	if (nextState.activeCommunity != this.state.activeCommunity) {
	 		this.getPostsByCommunity(nextState.activeCommunity);
		}
	},	
    getAllCommunityPostsIPFS: function() {    					
	  	var net = this.state.api;	    
	   	net.account.getAllCommunityPosts();		  
	    net.account.ee.on('allCommunityPosts',err => {		    	
	    	var result = net.account.allCommunityPosts;
	    	this.setState({allCommunityPosts: result});      						    	
	     });

	},
    getAllCommunityPosts: function() {        	
    	var self = this;    	
	    $.get('.././json_files/data/netid-account/personas/post.json', function(result) {
	    	self.setState({allCommunityPosts: result});      			    	
    	});    	
  	},
    getPostsByCommunity: function(activeCommunity) {        	
		var activeCommunityPosts = [];
		var self = this;
		this.state.allCommunityPosts.forEach(function (post, index) {
			if (post.community_id == activeCommunity.id) {
				activeCommunityPosts.push(post);
			}
		});
		self.setState({activeCommunityPosts: activeCommunityPosts});

	},
	postToCommunity: function(message) { 
		console.log('posting...' + message);       	
		var post = {};
		post.id = Math.floor(Math.random()*100000000000000000);
		post.community_id = this.state.activeCommunity.id;
		post.posted_by = this.state.activePersona.id;
		post.message = message;
		post.created_date = new Date().toString();

		var temp = this.state.activeCommunityPosts;
		temp.push(post);
		this.setState({activeCommunityPosts: temp});
	}	
};

module.exports = CommunityPostDao;
