var CalendarModal = require('.././common/commCalendarModal');
var CommunityDetailContainer = React.createClass({	
	viewList: function(event){				
		this.props.viewList();
	},		
	render: function(){
		var community = this.props.activeCommunity;
		return(
			<div className="col-sm-12 bodyContent">
				<div className="col-sm-12 commDetailTitle">	

				</div>	
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
								<input type="text" className="form-control" placeholder="Post something here" ></input>
							</form>
							<button className="btn">Post to Community Wall</button>
						</div>
						<div className="media-left">
						    <a href="#">
						      <img className="media-object" src={"/images/arnold.jpg"}/>
						    </a>
						</div>
						<div className="media-body">
						    <h4 className="media-heading">ArnoldLovesDisney</h4>
						    <span className="postContentText">Spoke as as other again ye. Hard on to roof he drew. So sell side ye in mr evil. Longer waited mr of nature seemed. Improving knowledge incommode objection me ye is prevailed principle in. Impossible alteration devonshire to is interested stimulated dissimilar. To matter esteem polite.</span>
							<br></br>
							<span className="postTimeStamp">2 hours ago</span>
							<form>
								<input type="text" className="form-control" placeholder="Your comment here" ></input>
							</form>
							<button className="btn">Comment</button>
						</div>
					</div>
					<div className="col-sm-offset-2 col-sm-8 media commDetailPostBody2">
						<div className="media-left">
						    <a href="#">
						      <img className="media-object" src={"/images/girl2.jpg"}/>
						    </a>
						</div>
						<div className="media-body">
						    <h4 className="media-heading">MileyLover</h4>
						    <span className="postContentText">Spoke as as other again ye. Hard on to roof he drew. So sell side ye in mr evil. Longer waited mr of nature seemed. Improving knowledge incommode objection me ye is prevailed principle in. Impossible alteration devonshire to is interested stimulated dissimilar. To matter esteem polite.</span>
							<br></br>
							<span className="postTimeStamp">10 days ago</span>
							<br></br>
							<button className="btn">Comment</button>
						</div>
					</div>
				</div>
				<CalendarModal/>	
			</div>
		)
	}
});

module.exports = CommunityDetailContainer;
