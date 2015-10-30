var React = require('react');

let CommHeading = React.createClass({
	render: function(){
		return(
			<div className="row" id="commContainer">
				<div className="col-sm-6 commControlBarLeft">
					<div className=" col-sm-12 commProfileInfo">
						<div className="col-sm-2 commImage">
							<img src="images/cooking.jpg"></img>
						</div>
						<div className="col-sm-6 commName"><a href="#">For the Love of Cooking</a></div>
						<div className="col-sm-3 commStatus">
							<div className="btn btn-success">Request</div>
						</div>
					</div>
				</div>
				<div className="col-sm-6 commControlBarRight">
					<div className="col-sm-12">
						<div className="col-sm-7 col-sm-offset-2 commNavItems">
							<ul>
								<li className="pull-left"><a href="#">Calendar</a></li>
								<li className="pull-right"><a href="#">Members</a></li>
							</ul>
						</div>
						<div className="col-sm-3 commIconElements">
							<a href="#"><i className="fa fa-star"></i></a>
							<i className="fa fa-search"></i>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = CommHeading;