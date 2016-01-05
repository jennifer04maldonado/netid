var CalendarModal = require('./../../common/commCalendarModal');
var CommunityDetailContainer = React.createClass({	
	getInitialState: function() {
		return {
			activeCommunityPosts: [],
			post :''
			}	
	},	
  	//gets called when recieved new props 		
  	componentWillReceiveProps: function(nextProps) {
		//console.log('componentWillReceiveProps: ' + nextProps.activePersona.persona_name);
		if (nextProps.activeCommunityPosts != this.props.activeCommunityPosts) {
			this.setState({activeCommunityPosts: nextProps.activeCommunityPosts});
		}
  	},	
	viewList: function(event){				
		this.props.viewList();
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
							<form>
								<input type="text" className="form-control" placeholder="Your comment here" ></input>
							</form>
							<button className="btn">Comment</button>
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
