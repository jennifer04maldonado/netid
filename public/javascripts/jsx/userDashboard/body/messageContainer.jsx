

var MessageContainer = React.createClass({
	render: function(){
		return(
			<div className="col-sm-12 bodyContent">
				<div className="col-sm-2 msgTitle">
					<h4><i className="fa fa-envelope"></i>Messages</h4>
				</div>
				<div className="col-sm-9 communityNavTabs">
					<ul className="nav nav-tabs" role="tablist">
						<li role="presentation"><a href="#inbox" aria-controls="inbox" role="tab" data-toggle="tab">Inbox</a></li>
						<li role="presentation"><a href="#outbox" aria-controls="outbox" role="tab" data-toggle="tab">Outbox</a></li>
						<li role="presentation"><a href="#compose" aria-controls="compose" role="tab" data-toggle="tab">Compose</a></li>
					</ul>
				</div>	
			</div>
		)
	}
});

module.exports = MessageContainer;
