var CommentContainer = require('../common/commentContainer');

var HomeContainer = React.createClass({
	getInitialState: function() {
		return {
			activePersona: null,
			allPosts: [],
			personaPosts: [],
			postMessage: '',
			commentIndex: []
		}	
	},
 	//this method decides to fetches data from IPFS or AJAX
  	componentWillReceiveProps: function(nextProps) {    
	    if (nextProps.activePersona !== this.props.activePersona) {
			var personaId = nextProps.activePersona.id;
			this.setState({activePersona: nextProps.activePersona});
	      	if (this.props.useIPFS) {         
	          	this.getPostsIPFS(personaId);
	      	} else {
	        	this.getPosts(personaId);
	      	}
	    }
  	},	
  	getPostsIPFS: function(personaId) {    
	  	var net = this.props.api;	    
	   	net.account.getAllPosts();
	   	net.account.ee.on('postgeterror', err =>{
	   		console.log('error occured in cat, creating first wall post')
	   		var firstPostArray = []
	   		//this.setPersonaPosts(personaId, result)
	   		this.setState({
	    		wallPost: firstPostArray
	    	})
	   	})	
	    net.account.ee.on('allPosts',err => {		    	
	    	var result = net.account.allPosts
	    	this.setPersonaPosts(personaId, result);
	    	this.setState({
	    		wallPost: result
	    	})
	     });
  	},
  	getPosts: function(personaId) {    
  		var self = this;	      	
	    $.get('.././json_files/data/netid-account/personas/wall.json', function(allPosts) {
	          //console.log('personaId:' + personaId);

	     	  var thisPersonaPosts = [];
	          for (var i=0; i < allPosts.length; i++) {
	            if (personaId == allPosts[i].persona_id) {
	              	thisPersonaPosts.push(allPosts[i]);
	            }
	          }
	          self.setState({
	                personaPosts: thisPersonaPosts
	          });
	    });       
  	},  
  	setPersonaPosts: function(personaId, allPosts) {
  		  var self = this;
		  var thisPersonaPosts = [];
		  for (var i=0; i < allPosts.length; i++) {
		    if (personaId == allPosts[i].persona_id) {
		      	thisPersonaPosts.push(allPosts[i]);
		    }
		  }
		  self.setState({
		        personaPosts: thisPersonaPosts
		  });
  	},
  	postMessage: function(event) {    
  		
  		event.preventDefault();

  		var net = this.props.api
  		var post = {};
  		post.id =  JSON.stringify(Math.floor(Math.random()*100000000000000000));
  		post.persona_id = this.state.activePersona.id;
  		post.pic = '/images/ein.jpeg';
  		post.posted_by = this.state.activePersona.persona_name;
  		post.message = this.state.postMessage;

  		var  today = new Date();
  		post.created_date = today.toString();
  		//console.log('today is: ' + today.toString());  	  		 		    
  		var allPosts = this.state.allPosts;
  		allPosts.push(post);
  		//console.log(allPosts)

      	if (this.props.useIPFS) {         
	  		this.props.api.account.postMessage(post, this.state.wallPost)
	  			net.account.ee.on('postMade',err => {
	  			if(this.isMounted()){
					this.setState({allPosts: allPosts})

			  		var personaPosts = this.state.personaPosts
			  		personaPosts.push(post)
			  		this.setState({personaPosts: personaPosts})

			  		//clear input field
			  		this.setState({postMessage: ''})
	  			}
  			});      	
      	} else {
  			if(this.isMounted()){
				this.setState({allPosts: allPosts})

		  		var personaPosts = this.state.personaPosts
		  		personaPosts.push(post)
		  		this.setState({personaPosts: personaPosts})

		  		//clear input field
		  		this.setState({postMessage: ''})      	
      		}
      	}


  		
  	},
  	postComment: function(event) {    
  		event.preventDefault();
  		//console.log('postId: ' + event.target.id);  		  	
  		var postId = event.target.postId.value;
		console.log('postId: ' + postId);
  		var message = event.target.comment.value;
  		//console.log('comment: ' + message);

		var comment = {};
  		comment.id =  Math.floor(Math.random()*100000000000000000);
  		comment.persona_id = this.state.activePersona.id;
  		comment.pic = '/images/arnold.jpg';
  		comment.posted_by = this.state.activePersona.persona_name;
  		comment.message = message;
  		var  today = new Date();
  		comment.created_date = today.toString();

  		var commentIndex = this.state.commentIndex;
  		var comments = [];
  		if (commentIndex[postId]) {
  			comments = commentIndex[postId];
  			comments.push(comment);
  			commentIndex[postId] = comments;
  		} else {
  			comments.push(comment);
  			commentIndex[postId] = comments;
  		}
  		this.setState({commentIndex: commentIndex});

		event.target.comment.value = '';
		$("#"+postId).collapse("hide");
  		//clear input field
  		//this.setState({comment: ''});

  	},
  	postHandler: function(event) {    
   		this.setState({postMessage: event.target.value});
  	},  	
	render: function(){
		var self = this;
		var commentIndex = this.state.commentIndex;
		var postNodes = this.state.personaPosts.map(function(post, index){
			return (
				<div className="col-sm-12" key={post.id}>	
					<div className="col-sm-11 postBody homePostBody">
						<div className="media-left" >
							<a href="#">
								<img className="media-object" src={post.pic}/>
							</a>
						</div>
						<div className="media-body">
						    <h4 className="media-heading">{post.posted_by} 
						    	<a href="#"><span className="communityNamePost">{"<<Community Name>>"}</span></a>
						    </h4>
						    <span className="postContentText">{post.message}</span>
							<a data-toggle="collapse" data-target={"#"+post.id}  className="col-sm-12 row postClosedCommentView" href="#"><i className="fa fa-comment"></i>Comment</a>									
							<span className="postTimeStamp">{post.created_date}</span>
							<CommentContainer comments={commentIndex[post.id]} />
							
							<form id={post.id} onSubmit={self.postComment} className="collapse">
								<input name="postId" type="hidden" value={post.id} value={post.id} />
								<textarea name="comment" type="text" className="form-control" placeholder="Your comment here" ></textarea>
								<button type="submit" className="btn">Comment</button>
							</form>
						</div>
					</div>
					<div className="col-sm-1 removePostBtn">
						<div className="dropdown">
						    <button className="btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
						        <span className="caret"></span>
						    </button>
						    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
							    <table className="table table-hover">
							    	<tbody>
							    		<tr>
								    		<td>Remove</td>
							    		</tr>
							    	</tbody>
							    </table>
							</ul>
						</div>
					</div>
				</div>	
			)
		});
		return(
			<div className="homeContent">
				<div className="col-sm-12 homeTitle">
					<h4><i className="fa fa-rss"></i>{this.props.activePersona ? this.props.activePersona.persona_name: ''}</h4>
				</div>
				<div className="col-sm-12 homeDetailFeed">
					<div className="col-sm-offset-2 col-sm-8 media homeDetailPostBody">
						<div className="well">	
							<form onSubmit={this.postMessage}>
								<textarea value={this.state.postMessage} onChange={this.postHandler} type="text" className="form-control" placeholder="Post something here" ></textarea>
								<button type="submit" className="btn postButton">Post to your wall</button>
							</form>							
						</div>
						{postNodes}
					</div>
				</div>
			</div>
		)
	}
});

module.exports = HomeContainer;
