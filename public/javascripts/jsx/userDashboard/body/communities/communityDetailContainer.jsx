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
  		//console.log('postId: ' + event.target.id);  		  	
  		var postId = event.target.id;  		  	

  		var message = this.refs[postId].value;
  		//console.log('comment: ' + message);

		var comment = {};
  		comment.id =  Math.floor(Math.random()*100000000000000000);;
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

  		//clear input field
  		this.refs[postId].value = '';
  		//this.setState({comment: ''});

  	},

	postToCommunity: function(event){						
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

						<div className="media-body" key={index}>
						    <h4 className="media-heading">{post.posted_by}</h4>
						    <span className="postContentText">{post.message}</span>
							<br></br>
							<span className="postTimeStamp">{post.date}</span>

							<CommentContainer comments={commentIndex[post.id]}/>

							<form>
								<input ref={post.id} type="text" className="form-control" placeholder="Your comment here" ></input>
							</form>
							<button id={post.id} onClick={self.postComment} className="btn">Comment</button>
						</div>						
					</div>
				)						
		});

		return(
			<div className="col-sm-12 bodyContent">
				<div className="col-sm-12 commDetailBody">
					<img src={"/images/coders.jpg"} className="col-sm-4 col-sm-offset-2"/>
					<div className="col-sm-4 commDetailText">	
						<h3>{community ? community.name : ''}<a href="#"><i className="fa fa-plus-circle"></i></a></h3>
						<p>{community? community.description : ''}</p>
						<p> Community ID: {community ? community.id : ''}</p>
						<p>Public/ Private</p>
						<p><a href="#membersListModal" data-toggle="modal" data-target="#membersListModal"><img src={"/images/friends.png"}/>130 Members</a></p>
						<p><a href="#commCalendar" data-toggle="modal" data-target="#commCalendarModal"><i className="fa fa-calendar"></i>Calendar</a></p>
					</div>	
				</div>
				<div className="col-sm-12 commDetailFeed">
					<div className="col-sm-offset-2 col-sm-8 media commDetailPostBody">
						<div className="well">	
							<form>
								<input value={this.state.post} onChange={this.postHandler} type="text" className="form-control" placeholder="Post something here" ></input>
							</form>
							<button onClick={this.postToCommunity} className="btn">Post to Community Wall</button>
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
