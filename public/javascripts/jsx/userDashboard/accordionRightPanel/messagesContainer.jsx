

var MessagesContainer = React.createClass({

	render: function(){
        return(
			<div id='messagesContainer'>
				<div className="col-sm-12 messageTitleCntnr">
					<h5>Messages
						<a href="#">
							<i className="fa fa-pencil-square-o"></i>
						</a>	
					</h5>	
				</div>
				<div className="col-sm-12 messageSearchCntnr">
					<input type="text" className="form-control" placeholder="Search"></input>	
				</div>
				<div className="col-sm-12 messageRightContent">
					<div className="col-sm-12 messageInd">
						<ul>
							<li className="messageName"><a href="#">JenniFury</a></li>
							<li>Today 9:15am</li>
							<li>Why do you make my life harder than it has to be?</li>
						</ul>
					</div>
					<div className="col-sm-12 messageInd">	
						<ul>
							<li className="messageName"><a href="#">Naterade</a></li>
							<li>Monday 2:45pm</li>
							<li>This is the worst thing I have ever seen.</li>
						</ul>
					</div>	
					<div className="col-sm-12 messageInd">
						<ul>
							<li className="messageName"><a href="#">JoshtheBoss</a></li>
							<li>Frday 11/23/15 11:04pm</li>
							<li>Hey man, I see that we have a lot of similar communities. Do you want to make a transaction with me?</li>
						</ul>
					</div>	
					<div className="col-sm-12 messageInd">
						<ul>
							<li className="messageName"><a href="#">JenniFury</a></li>
							<li>Today 9:15am</li>
							<li>Why do you make my life harder than it has to be?</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
});


module.exports = MessagesContainer;
