var CalendarModal = require('./../../common/commCalendarModal');
var CommentContainer = require('./../../common/commentContainer');

var CommunityDetailContainer = React.createClass({	
	getInitialState: function() {
		return {
			activePersona: null,
			activeCommunityPosts: [],
			post :'',
			commentIndex: []
			}	
	},	
  	//gets called when recieved new props 		
  	componentWillReceiveProps: function(nextProps) {
		//console.log('componentWillReceiveProps: ' + nextProps.activePersona.persona_name);
		if (nextProps.activePersona !== this.props.activePersona) {
			this.setState({activePersona: nextProps.activePersona});
		}

		if (nextProps.activeCommunityPosts != this.props.activeCommunityPosts) {
			this.setState({activeCommunityPosts: nextProps.activeCommunityPosts});
		}

	    if (nextProps.comments !== this.props.comments) {
			this.setState({comments: nextProps.comments});
	    }
  	},	
	viewList: function(event){				
		this.props.viewList();
	},	
  	postComment: function(event) {    
  		event.preventDefault();
  		
  		var postId = event.target.postId.value;
  		//console.log('postId: ' + postId);  		  	
        
  		var message = event.target.comment.value;
  		//console.log('comment: ' + message);

		var comment = {};
  		comment.id =  Math.floor(Math.random()*100000000000000000);
  		comment.persona_id = this.state.activePersona.id;
  		comment.pic = '/images/arnold.jpg';
  		comment.posted_by = this.state.activePersona.persona_name;
  		comment.message = message;
  		comment.created_date = new Date().toString();

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

  		//clear input field  		
  		event.target.comment.value = '';
		$("#"+postId).collapse("hide");
  		//this.setState({comment: ''});

  	},

	postToCommunity: function(event){	
		event.preventDefault();					
		var message = this.state.post;
		this.props.postToCommunity(message);		           
		this.setState({post: ''});
	},		
	postHandler: function(event){				
		var post = event.target.value;
		this.setState({post: post});
	},			
	render: function(){
		var community = this.props.activeCommunity;
		var self = this;
		var commentIndex = this.state.commentIndex;

		var postsNodes = this.state.activeCommunityPosts.map(function(post, index){							
			
			return (
					<div key={post.id}>
						<div className="media-left">
						    <a href="#">
						      <img className="media-object" src={"/images/arnold.jpg"}/>
						    </a>
						</div>

						<div className="media-body commDetailsMediaBodyItem" key={index}>
						    <h4 className="media-heading">{post.posted_by}</h4>
						    <span className="postContentText">{post.message}</span>
							<br></br>
							<span className="postTimeStamp">{post.created_date}</span>
							<a data-toggle="collapse" data-target={"#communityPostId"+post.id}  className="col-sm-12 row postClosedCommentView" href="#"><i className="fa fa-comment"></i>Comment</a>																

							<CommentContainer comments={commentIndex[post.id]}/>

							<form onSubmit={self.postComment} id={"communityPostId"+post.id} className="collapse">							
								<input name="postId" type="hidden" value={post.id} />								
								<input name="comment" type="text" className="form-control" placeholder="Your comment here" ></input>
								<button type="submit" className="btn">Comment</button>
							</form>
							
						</div>						
					</div>
				)						
		});

		return(
			<div className="col-sm-12 bodyContent">
				<div className="col-sm-12 commDetailBody">
					<img src={"/images/coders.jpg"} className="col-sm-6"/>
					<div className="col-sm-6 commDetailText">	
						<h3>{community ? community.name : ''}
							<a href="#"><i className="fa fa-plus-circle"></i></a>
						</h3>
						<p>{community? community.description : ''}</p>
						<p> Community ID: {community ? community.id : ''}</p>
						<p>Public/ Private</p>
						<p><a href="#membersListModal" data-toggle="modal" data-target="#membersListModal"><img src={"/images/friends.png"}/>{community ? community.members.length : 0} Members</a></p>
						<p><a href="#commCalendar" data-toggle="modal" data-target="#commCalendarModal"><i className="fa fa-calendar"></i>Calendar</a></p>
					</div>	
				</div>
				<div className="col-sm-12 commDetailFeed">
					<div className="col-sm-12 media commDetailPostBody">
						<div className="well commDetailPostWell">	
							<form onSubmit={this.postToCommunity} >
								<input name="communityId" type="hidden" value={community ? community.id: ''} />
								<input value={this.state.post} onChange={this.postHandler} type="text" className="form-control" placeholder="Post something here" ></input>
								<button type="submit" className="btn">Post to Community Wall</button>
							</form>
							
						</div>
						{postsNodes}
					</div>
				</div>
				<CalendarModal/>	
			</div>
		)
	}
});

module.exports = CommunityDetailContainer;
