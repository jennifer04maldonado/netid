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
	    net.account.ee.on('allPosts',err => {		    	
	    	var result = net.account.allPosts;
	    	this.setPersonaPosts(personaId, result);
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
  		var net = this.props.api
  		var post = {};
  		post.id =  JSON.stringify(Math.floor(Math.random()*100000000000000000));
  		post.persona_id = this.state.activePersona.id;
  		post.pic = '/images/ein.jpeg';
  		post.posted_by = this.state.activePersona.persona_name;
  		post.message = this.state.postMessage;

  		var  today = new Date();
  		post.date = today.toString();
  		//console.log('today is: ' + today.toString());  	  		 		    
  		var allPosts = this.state.allPosts;
  		allPosts.push(post);

  		this.props.api.account.postMessage(allPosts)
  		net.account.ee.on('postMade',err => {
  			if(this.isMounted()){
				this.setState({allPosts: allPosts})

		  		var personaPosts = this.state.personaPosts
		  		personaPosts.push(post)
		  		this.setState({personaPosts: personaPosts})

		  		//clear input field
		  		this.setState({postMessage: ''})
  			}
  		})
  		
  	},
  	postComment: function(event) {    
  		//console.log('postId: ' + event.target.id);  		  	
  		var postId = event.target.dataset.postId;  		  	
		console.log('postId: ' + postId);
  		var message = this.refs[postId].value;
  		//console.log('comment: ' + message);

		var comment = {};
  		comment.id =  Math.floor(Math.random()*100000000000000000);
  		comment.persona_id = this.state.activePersona.id;
  		comment.pic = '/images/arnold.jpg';
  		comment.posted_by = this.state.activePersona.persona_name;
  		comment.message = message;

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

		this.refs[postId].value = '';
		$("#"+postId).collapse("hide");
  		//clear input field
  		//this.setState({comment: ''});

  	},
  	postHandler: function(event) {    
   		this.setState({postMessage: event.target.value});
  	},  	
  	commentHandler: function(event) {      		
	//  console.log('comment value: ' + event.target.value);
	//	this.setState({comment: event.target.value});
  	},  	  	
	render: function(){
		var self = this;
		var commentIndex = this.state.commentIndex;
		var postNodes = this.state.personaPosts.map(function(post, index){
			return (
				<div className="col-sm-12">	
					<div key={post.id} className="col-sm-11 postBody homePostBody">
						<div className="media-left" >
							<a href="#">
								<img className="media-object" src={post.pic}/>
							</a>
						</div>
						<div className="media-body">
						    <h4 className="media-heading">{post.posted_by} 
						    	<a href="#"><span className="communityNamePost">Community Name</span></a>
						    </h4>
						    <span className="postContentText">{post.message}</span>
							<a data-toggle="collapse" data-target={"#"+post.id}  className="col-sm-12 row postClosedCommentView" href="#"><i className="fa fa-comment"></i>Comment</a>									
							<CommentContainer comments={commentIndex[post.id]} />
							<span className="postTimeStamp">{post.date}</span>
							<form id={post.id} className="collapse">
								<textarea ref={post.id} onChange={self.commentHandler} type="text" className="form-control" placeholder="Your comment here" ></textarea>
								<button data-post-id={post.id} onClick={self.postComment} className="btn">Comment</button>
							</form>
						</div>
					</div>
					<div className="col-sm-1 row removePostBtn">
						<div className="dropdown">
						    <button className="btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
						        <span className="caret"></span>
						    </button>
						    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
							    <table className="table table-hover">
							    	<tbody>
							    		<td>
							    			Remove
							    		</td>
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
							<form>
								<textarea value={this.state.postMessage} onChange={this.postHandler} type="text" className="form-control" placeholder="Post something here" ></textarea>
							</form>
							<button onClick={this.postMessage} className="btn postButton">Post to your wall</button>
						</div>
						{postNodes}
					</div>
				</div>
			</div>
		)
	}
});

module.exports = HomeContainer;
